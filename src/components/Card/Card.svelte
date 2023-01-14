<script>
	let inputClass;
	export { inputClass as class };
</script>

<div class={`flex flex-col items-center p-4 rounded-lg shadow-xl ${inputClass || ''}`}>
	<slot />
</div>
