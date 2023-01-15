<script>
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	export let data;
	let players;
	let ready = false;

	players = data.sort((a, b) => b.score - a.score);
	players = players.slice(0, 3);
	players = players.map((p) => p.name);

	onMount(() => (ready = true));

	function rollIn(node, params) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing,
			css: (t, u) =>
				`transform-origin: center; transform: ${existingTransform} translatex(${
					-u * 100
				}%) scale(${t}) rotate(${t * 1080}deg);`
		};
	}
</script>

<div class="flex flex-col gap-10 p-4">
	{#if ready}
		<div
			in:rollIn={{ duration: 4000, easing: cubicOut }}
			class="flex flex-col gap-2 max-w-md self-center w-full items-center py-8 rounded-3xl bg-white shadow-xl border-t"
		>
			<div class="bg-black rounded-full w-28 h-28" />
			<div class="text-7xl">🥇</div>
			<div class="text-6xl">{players[0]}</div>
		</div>
		<div class="flex flex-col items-center md:flex-row justify-center gap-20">
			{#each players as player, i}
				{#if i > 0}
					<div
						in:rollIn={{ duration: 2000, easing: cubicOut }}
						class="flex flex-col grow-0 max-w-md gap-2 items-center px-20 py-8 rounded-3xl bg-white shadow-xl border-t"
					>
						<div class="bg-black rounded-full w-16 h-16" />
						{#if i === 1}
							<div class="text-4xl">🥈</div>
						{:else}
							<div class="text-4xl">🥉</div>
						{/if}
						<div class="text-base">{player}</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
