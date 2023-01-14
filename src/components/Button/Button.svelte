<script>
	let inputClass;
	export { inputClass as class };

	export let onClick;
</script>

<button on:click={onClick} class={`flex items-center px-4 bg-gray-600 text-white rounded-lg ${inputClass || ''} `}>
	<slot />
</button>
