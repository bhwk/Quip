<script>
	let inputClass;
	export { inputClass as class };

	let inputPlaceholder;
	export { inputPlaceholder as placeholder };

	export let value;
	export let type;

	function handleKeydown(event) {
		// prevent that a space is typed
		if (event.code === 'Space') event.preventDefault();
	}

	function handleInput(event) {
		// remove spaces from pasted text
		value = value.replaceAll(' ', '');
	}
</script>

<input
	type="text"
	class={`flex-1 px-4 border rounded-lg ${
		inputClass || ''
	}  border-gray-300 leading-tight focus:outline-none`}
	placeholder={`${inputPlaceholder || ''}`}
	bind:value
	on:keydown={type === 'lobby' ? handleKeydown : null}
	on:input={type === 'lobby' ? handleInput : null}
/>
