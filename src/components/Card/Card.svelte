<script>
	let inputClass;
	export { inputClass as class };
</script>

<div
	class={`flex flex-col items-center rounded-lg border-t shadow-xl ${inputClass || ''} bg-white`}
>
	<slot />
</div>
