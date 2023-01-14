<script>
	let inputClass;
	export { inputClass as class };

	let inputPlaceholder;
	export { inputPlaceholder as placeholder };

	export let value;

</script>

<input
	type="text"
	class={`flex-1 px-4 border rounded-lg ${
		inputClass || ''
	}  border-gray-300 text-gray-900 leading-tight focus:outline-none focus:border-secondary-400`}
	placeholder={`${inputPlaceholder || ''}`}
	bind:value = {value}
/>
