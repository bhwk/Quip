<script>
	import Logo from '../../components/Logo/Logo.svelte';
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';
	import { setContext, getContext, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Button from '../../components/Button/Button.svelte';
	import Card from '../../components/Card/Card.svelte';
	import { goto } from '$app/navigation';
	import Tweet from '../../components/Tweet/Tweet.svelte';
	import TextInput from '../../components/TextInput/TextInput.svelte';
	import Winner from '../../components/Winner/Winner.svelte';

	let currentScreen = 'lobby';
	let currentRoundData;
	let currentRoundAnswers;

	let reply;
	let inputDisabled = false;
	let inputPlaceholder = 'Enter your reply';
	let timer = 30;

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

		socket.on('joinLobbyFailure', (res) => {
			// todo: redirect to home page
		});

		socket.on('lobbyUpdate', (res) => {
			lobbyDetails = res;
			if (currentScreen === 'lobby' && lobbyDetails.hasStarted) {
				currentScreen = 'game';
				socket.emit('forceGameUpdate');
				console.log('forceGameUpdate');
			}
			console.log('lobbyUpdate', lobbyDetails);
		});

		socket.on('roundStart', (res) => {
			currentRoundData = res.roundData;

			inputPlaceholder = 'Enter your reply';
			inputDisabled = false;
			console.log('roundStart', res);
		});

		socket.on('forceClientUpdate', (res) => {
			console.log('forceClientUpdate', res);
			currentRoundData = res.roundData;
			console.log('forceClientUpdate', res);
			inputPlaceholder = 'Enter your reply';
			inputDisabled = false;
		});

		socket.on('gameStart', (res) => {
			currentRoundData = res.roundData;
			if (currentScreen === 'lobby') {
				currentScreen = 'game';
			}
		});

		socket.on('gameUpdate', (res) => {
			timer = res.timeLeft;
			currentRoundAnswers = res.players.map((p) => {
				return {
					score: p.score,
					username: p.name,
					currentRoundAnswer: p.currentRoundAnswer,
					hasVoted: false
				};
			});
		});
	});

	const startGame = (e) => {
		// placeholder to switch views
		e.preventDefault();
		const isHost = lobbyDetails.players.reduce((acc, u) => {
			if (u.name === username) {
				acc = u.isHost;
			}
			return acc;
		}, false);

		if (!isHost) {
			alert('Only host can start');
			return;
		}

		socket.emit('hostStartGame');
		currentScreen = 'game';
		inputPlaceholder = 'Enter your reply';
		inputDisabled = false;
	};

	const onSubmitReply = (event) => {
		if (event.code === 'Enter') {
			socket.emit('receiveAnswer', reply);
			event.target.value = '';
			inputDisabled = true;
			inputPlaceholder = 'Reply submitted!';
		}
	};
</script>

{#if currentScreen === 'game'}
	<div class="flex flex-row justify-evenly" transition:fade>
		<Logo class="absolute top-14 left-10 text-6xl px-8 pb-6 pt-2" />
		<div class="flex flex-col">
			<div
				class="flex flex-col h-[800px] overflow-y-scroll w-fit py-8 px-16 mx-auto scroll-smooth scrollbar-hide rounded-lg shadow-lg mt-8 border-t"
			>
				{#if currentRoundData}
					<div id="tweet">
						<div class="flex flex-row mx-auto space-y-8">
							<div class="flex flex-row mt-2 rounded-lg">
								<Tweet
									username={currentRoundData.username}
									content={currentRoundData.content[0]}
								/>
							</div>
						</div>
					</div>
				{/if}
				{#if currentRoundAnswers}
					{#each currentRoundAnswers as answer, i}
						{#if answer.currentRoundAnswer}
							<div transition:fly={{ y: 200, duration: 2000 }}>
								<div class="flex flex-row mx-auto space-y-8 answer-row">
									<div class="flex flex-row mt-2 rounded-lg">
										<Tweet
											username={answer.username}
											content={answer.currentRoundAnswer}
										/>

										<div class="flex flex-col my-auto w-16 space-y-2">
											<div
												class="rounded-full text-2xl w-[40px] h-[40px] text-center bg-black cursor-pointer mx-auto"
											>
												💩
											</div>
											<div
												class="rounded-full text-2xl w-[40px] h-[40px] text-center bg-black cursor-pointer mx-auto"
												on:click={(e) => {
													if (
														!answer.hasVoted &&
														answer.username !== username
													) {
														answer.score++;
														socket.emit('receiveVotes', answer.score);
													}
												}}
											>
												🔥
											</div>
										</div>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{/if}
			</div>
		</div>
		<div class="flex flex-col py-8">
			<div
				class="flex flex-col gap-2 rounded-lg shadow-xl border-t p-4 w-full max-w-xl bg-black text-white"
			>
				<div class="flex mx-auto">
					<h1 class="mb-8">
						Players ( {(lobbyDetails.players && lobbyDetails.players.length) || '0'} / 20
						)
					</h1>
				</div>
				<ul id="playerList">
					{#if lobbyDetails.players}
						<div class="flex flex-col overflow-auto mx-4">
							{#each lobbyDetails.players as playerObj, i}
								<li class="border-b my-2 p-1">
									{#if playerObj.isHost}👑{/if}
									{playerObj.name}
									{#if playerObj.name === username}(you){/if}
									{playerObj.score}
								</li>
							{/each}
						</div>
					{/if}
				</ul>
			</div>
			<input
				type="text"
				bind:value={reply}
				on:keydown={onSubmitReply}
				class="disabled:cursor-not-allowed mt-8 min-w-[480px] min-h-24 bg-black text-white border rounded-lg p-4 border-gray-300 leading-tight focus:outline-none"
				placeholder={inputPlaceholder}
				disabled={inputDisabled || null}
			/>
			<p class="flex font-bold text-lg">{timer || 30}</p>
		</div>
	</div>
{:else if currentScreen === 'lobby'}
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
						{#each lobbyDetails.players as playerObj, i}
							<li class="border-b my-2 p-1">
								{#if playerObj.isHost}👑{/if}
								{playerObj.name}
								{#if playerObj.name === username}(you){/if}
							</li>
						{/each}
					</div>
				{/if}
			</ul>
		</div>
	</div>
{:else if currentScreen === 'endGame'}
	<Winner />
{/if}
