<script>
	import Logo from '../components/Logo/Logo.svelte';
</script>

<div class="flex flex-1 flex-col">
	<Logo />
	<div id="lobbyContainer" class="flex flex-1 justify-around">
		<div class="border-2 border-black">
			<h1>Tutorial header</h1>
		</div>
		<div class="flex flex-col border-2 border-black text-center">
			<h1>Lobby header</h1>
			<input class="mx-auto"type="text" placeholder="text" />
			<span>LOBBY CODE</span>
			<div class="flex justify-between">
				<a class="bg-gradient-to-r font-extrabold text-gray-600 from-primary to-secondary rounded-md box-decoration-clone" href="/lobby">CREATE</a>
				<a href="/lobby">JOIN</a>
			</div>
		</div>
	</div>
</div>
