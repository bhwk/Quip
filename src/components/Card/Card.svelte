<script>
	let inputClass;
	export { inputClass as class };
</script>

<div class={`flex flex-col items-center rounded-lg shadow-xl ${inputClass || ''} bg-white`}>
	<slot />
</div>
