<script>
	let inputClass;
	export { inputClass as class };

	let inputPlaceholder;
	export { inputPlaceholder as placeholder };
</script>

<button class={`flex items-center px-4 bg-gray-600 text-white rounded-lg ${inputClass || ''} `}>
	<slot />
</button>
