<script>
	let inputClass;

	export { inputClass as class };

	export let logoText;
</script>

<div class="flex items-center">
	<div
		class={`font-black cursor-pointer rounded-lg box-decoration-clone bg-gradient-to-r from-primary to-secondary text-black select-none hover:text-gray-700 ${
			inputClass || ''
		}`}
	>
		{logoText || 'Quip'}
	</div>
</div>
