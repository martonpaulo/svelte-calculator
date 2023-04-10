<script lang="ts">
  import Calculator from "./components/Calculator.svelte";
</script>

<main>
	<Calculator />
</main>

<style>
	:root {
		--background-color: #010001;
		--text-color: #ffffff;
		--primary-button-color: #323233;
		--secondary-button-color: #a4a4a4;
		--tertiary-button-color: #ff9e0b;
	}

	:global(body) {
		background-color: var(--background-color);
		font-size: 8px;
		font-family: monospace;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>