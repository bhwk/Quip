<script>
	let inputClass;
	export { inputClass as class };

	export let onClick;
</script>

<button
	on:click={onClick}
	class={`flex items-center px-4 bg-black text-white rounded-lg ${inputClass || ''} `}
>
	<slot />
</button>
