<script>
	import Logo from '../../components/Logo/Logo.svelte';
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';
	import { setContext, getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Button from '../../components/Button/Button.svelte';
	import Card from '../../components/Card/Card.svelte';
	import { goto } from '$app/navigation';
	import Tweet from '../../components/Tweet/Tweet.svelte';

	let hasStarted = false;

	export let data;

	const lobbyCode = data.props.lobbyCode;
	const username = data.props.username;

	export let lobbyDetails = {};

	let socket;
	// setContext('socket', socket);

	onMount(async () => {
		socket = io('http://localhost:3000/', {
			auth: {
				username,
				lobby: lobbyCode
			}
		});

		socket.on('joinLobbyResponse', (res) => {
			if (!res.success) {
				// Redirect to home with message
			}
			console.log('joined lobby succesfully');
		});

		socket.on('lobbyUpdate', (res) => {
			console.log('Lobby has been updated');
			if (!res) {
				socket.emit('getLobbyDetailsRequest');
			} else {
				goto('/');
			}
		});

		socket.on('getLobbyDetailsResponse', (res) => {
			// get players
			lobbyDetails = res;
			console.log(lobbyDetails);
			console.log('getLobbyDetailsResponse', lobbyDetails);
		});
	});

	const startGame = (e) => {
		// placeholder to switch views
		e.preventDefault();
		hasStarted = true;
	};

	const getPlayers = (e) => {
		e.preventDefault();
		console.log('debug', lobbyDetails);
	};
</script>

{#if !hasStarted}
	<div transition:fade>
		<Logo class="absolute top-14 right-10 text-6xl px-8 pb-6 pt-2" />
		<div class="flex flex-col">
			<div class="flex flex-row mx-auto my-8">
				<Tweet {username} />

				<div class="flex flex-col my-auto w-16 space-y-2">
					<div
						class="rounded-full text-2xl w-[40px] h-[40px] text-center bg-black cursor-pointer mx-auto"
					>
						💩
					</div>
					<div
						class="rounded-full text-2xl w-[40px] h-[40px] text-center bg-black cursor-pointer mx-auto"
					>
						🔥
					</div>
				</div>
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
			<Logo class="text-3xl px-4 py-2 pb-4" logoText={lobbyCode} />
		</div>
		<Card class="w-full max-w-xl p-8 px-12 mt-8">
			<Button class="text-2xl p-4">Click to copy link!</Button>
			<div class="mt-12">
				<Button class="text-2xl p-4" onClick={startGame}>Start the Game!</Button>
			</div>
		</Card>
		<div
			class="flex flex-col gap-2 rounded-lg shadow-xl border-t p-4 w-full max-w-xl mt-16 bg-white"
		>
			<div class="flex mx-auto">
				<h1 class="mb-8">
					Players ( {(lobbyDetails.players && lobbyDetails.players.length) || '0'} / 20 )
				</h1>
			</div>
			<ul id="playerList">
				{#if lobbyDetails.players}
					<div class="flex flex-col overflow-auto mx-4">
						{#each lobbyDetails.players as playerName, i}
							<li class="border-b my-2 p-1">
								{playerName}
								{#if playerName === username}(you){/if}
							</li>
						{/each}
					</div>
				{/if}
			</ul>
		</div>
	</div>
{/if}
