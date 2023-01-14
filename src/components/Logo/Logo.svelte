<script>
	export let size;

	let inputClass;
	export { inputClass as class };
</script>

<div
	class={`font-extrabold rounded-md box-decoration-clone bg-gradient-to-r from-primary to-secondary text-gray-600 text-2xl select-none hover-text-gray-200 ${
		inputClass || ''
	}`}
>
	Quip
</div>
