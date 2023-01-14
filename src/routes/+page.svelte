<script>
	import Button from '../components/Button/Button.svelte';
	import Card from '../components/Card/Card.svelte';
	import Logo from '../components/Logo/Logo.svelte';
	import TextInput from '../components/TextInput/TextInput.svelte';

	let username = ''
</script>

<div class="flex flex-col pt-8 px-6 lg:px-8">
	<div class="mx-auto pb-32">
		<Logo class="text-8xl px-8 pb-6 pt-2" />
	</div>
	<div id="lobbyContainer" class="flex my-6 mx-auto text-gray-700 space-x-16">
		<Card class="h-[400px] w-96">
			<div class="flex flex-col">
				<h1 class="font-extrabold mt-8 text-secondary-600">How to play ❓</h1>
				<ul class="space-y-4 text-lg mt-[100px]">
					<li>Create a lobby or join a lobby!</li>
					<li>Enter your username.</li>
					<li>Invite your friends</li>
				</ul>
			</div>
		</Card>
		<Card class="w-full">
			<div class="flex flex-col mx-auto">
				<h1 class="font-extrabold mt-8 text-4xl">Joining a lobby❓</h1>
				<div class="space-y-4 mt-8">
					<TextInput class="h-12 w-full" placeholder="Enter the lobby code" />

					<TextInput class="h-12 w-full" placeholder="Enter the lobby code" />
				</div>
				<div class="flex justify-between mt-8">
					<Button class="font-extrabold h-12">
						Create
					</Button>
					<Button class="font-extrabold h-12 px-8" on:click={() => console.log(username)}>
						Join
					</Button>
				</div>
			</div>
		</Card>
	</div>
</div>
