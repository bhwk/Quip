<script>
	export let size;

	let inputClass;
	export { inputClass as class };
</script>

<div class="flex items-center">
	<div
		class={`font-extrabold px-2 py-1 cursor-pointer rounded-md box-decoration-clone bg-gradient-to-r from-primary to-secondary text-gray-800 text-2xl select-none hover:text-gray-700 ${
			inputClass || ''
		}`}
	>
		Quip
	</div>
</div>
