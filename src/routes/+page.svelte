<script>
	import Button from '../components/Button/Button.svelte';
	import Card from '../components/Card/Card.svelte';
	import Logo from '../components/Logo/Logo.svelte';
	import TextInput from '../components/TextInput/TextInput.svelte';

	let username='';
	let lobbyCode='';
</script>

<div class="flex flex-col pt-8 px-6 lg:px-8">
	<div class="mx-auto pb-32">
		<Logo class="text-8xl px-8 pb-6 pt-2" />
	</div>
	<div id="lobbyContainer" class="flex my-6 mx-auto text-gray-700 space-x-16">
		<Card class="h-[400px] px-12 w-[600px]">
			<div class="flex flex-col h-full mx-auto items-center">
				<h1 class="font-extrabold mt-8 text-4xl">
					How To <span class="text-secondary">Play</span>
				</h1>
				<ul class="space-y-2 text-lg mt-12 font-semibold text-center">
					<li>Create a lobby or join a lobby!</li>
					<li>Enter your username.</li>
					<li>Invite your friends</li>
				</ul>
				<div class="mt-auto pb-4">
					<a>placeholder github icon</a>
				</div>
			</div>
		</Card>
		<Card class="w-full px-12">
			<div class="flex flex-col mx-auto h-full">
				<h1 class="font-extrabold mt-8 text-4xl mx-auto">Joining A Lobby❓</h1>
				<div class="space-y-8 mt-12">
					<TextInput bind:value={username} class="h-12 w-full" placeholder="Enter your username" />

					<TextInput bind:value={lobbyCode} class="h-12 w-full" placeholder="Enter the lobby code" />
				</div>
				<div class="flex justify-between mt-auto mb-12">
					<Button class="font-extrabold h-12">
						Create
					</Button>
					<Button class="font-extrabold h-12 px-8">
						Join
					</Button>
				</div>
			</div>
		</Card>
	</div>
</div>
