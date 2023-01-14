<script>
	export let size;

	let inputClass;
	export { inputClass as class };
</script>

<div class="flex items-center">
	<div
		class={`font-extrabold cursor-pointer rounded-lg box-decoration-clone bg-gradient-to-r from-primary to-secondary text-gray-800 select-none hover:text-gray-700 ${
			inputClass || ''
		}`}
	>
		Quip
	</div>
</div>
