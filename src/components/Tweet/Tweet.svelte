<script>
	export let username;
	export let avatar;
	export let content;
</script>

<div
	class="self-center flex gap-2 grow-0 w-[400px] bg-black rounded-3xl text-white p-4 box-border border border-gray-600"
>
	<div class="flex gap-2">
		{#if !avatar}
			<div class="bg-white text-black text-center font-bold text-2xl w-12 h-12 rounded-full">
				{username[0]}
			</div>
		{:else}
			<img
				class="object-contain h-12 w-12 rounded-full"
				src={avatar}
				alt={`${username}-avatar`}
			/>
		{/if}
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex flex-col">
			<div class="font-bold">
				{username}
			</div>
			<div class="text-neutral-400 text-sm font-light">
				@{username}
			</div>
		</div>
		<div class="text-sm">
			{#if !content}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, blanditiis? Sed quod
				reprehenderit quis cum, reiciendis a odit praesentium aspernatur quisquam earum aut
				explicabo, ratione esse laboriosam fugit molestias adipisci.
			{:else}
				{content}
			{/if}
		</div>
	</div>
</div>
