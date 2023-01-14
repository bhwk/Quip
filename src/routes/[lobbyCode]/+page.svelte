<script>
	import Logo from '../../components/Logo/Logo.svelte';
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';
	import { setContext, getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let hasStarted = false;

	export let data;

	const lobbyCode = data.props.lobbyCode;
	const username = data.props.username;
	let lobbyDetails;

	const socket = io('http://localhost:3000/', {
		auth: {
			username,
			lobby: lobbyCode
		}
	});
	setContext('socket', socket);

	socket.on('joinLobbyResponse', (res) => {
		if (!res.success) {
			// Redirect to home with message
		}
	});

	socket.on('userJoinLobby', () => {
		//  when user joined
		console.log('a user has joined the lobby lets request for data');
		socket.emit('getLobbyDetailsRequest');
	});

	socket.on('getLobbyDetailsResponse', (res) => {
		// get players
		lobbyDetails = res;
		console.log(lobbyDetails);
	});

	const startGame = (e) => {
		// placeholder to switch views
		e.preventDefault();
		hasStarted = true;
	};
</script>

{#if hasStarted}
	<div transition:fade>
		<Logo class="absolute top-14 right-10 text-6xl px-8 pb-6 pt-2" />
		<div class="flex flex-col">
			<div class="flex flex-row mx-auto my-8">
				<div class="rounded-full w-[80px] h-[80px] bg-gray-300 mt-8 mr-16" />
				<div class="h-[250px] w-[600px] bg-gray-300 rounded-lg" />
			</div>
			<div class="flex flex-row mx-auto my-8">
				<div class="rounded-full w-[80px] h-[80px] bg-gray-300 mt-8 mr-16" />
				<div class="h-[250px] w-[600px] bg-gray-300 rounded-lg" />
			</div>
			<div class="flex flex-row mx-auto my-8">
				<div class="rounded-full w-[80px] h-[80px] bg-gray-300 mt-8 mr-16" />
				<div class="h-[250px] w-[600px] bg-gray-300 rounded-lg" />
			</div>
			<div class="flex flex-row mx-auto my-8">
				<div class="rounded-full w-[80px] h-[80px] bg-gray-300 mt-8 mr-16" />
				<div class="h-[250px] w-[600px] bg-gray-300 rounded-lg" />
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-col items-center flex-1 p-4 box-border gap-4">
		<div class="text-center flex flex-col gap-2">
			<span id="lobbyCode" class="border-2 border-black w-52">{lobbyCode}</span>
			<Logo class="text-8xl px-8 pb-6 pt-2" />
		</div>
		<div class="flex flex-col gap-2">
			<ul id="playerList" class="border-2 border-black p-4 w-96">
				{#if lobbyDetails}
					<label>test</label>
					{#each lobbyDetails.players as playerName, i}
						<li>{playerName}</li>
					{/each}
				{/if}
			</ul>
			<div class="flex gap-2">
				<button class="border-2">START</button>
				<a href="/" class="border-2">LEAVE</a>
			</div>
		</div>
	</div>
{/if}
