<script>
	import Logo from '../components/Logo/Logo.svelte';
</script>

<div class="flex flex-col pt-8 px-6 lg:px-8">
	<div class="mx-auto pb-32">
		<Logo class="text-8xl px-8 pb-6 pt-2" />
	</div>
	<div id="lobbyContainer" class="flex w-full max-w-4xl justify-between border-2 mt-16 mx-auto">
		<div class="flex flex-col items-center border-2 border-primary max-w-sm w-full">
			<h1>How to play</h1>
			<ul>
				<li>Test</li>
				<li>Test</li>
				<li>Test</li>
				<li>Test</li>
			</ul>
		</div>
		<div class="flex flex-col border-2 border-black max-w-sm w-full text-center">
			<h1>Join a Lobby</h1>
			<input class="mx-auto" type="text" placeholder="text" />
			<span>LOBBY CODE</span>
			<div class="flex justify-around">
				<a
					class="bg-gradient-to-r font-extrabold text-gray-600 from-primary to-secondary rounded-md box-decoration-clone"
					href="/lobby">CREATE</a
				>
				<a href="/lobby">JOIN</a>
			</div>
		</div>
	</div>
</div>
