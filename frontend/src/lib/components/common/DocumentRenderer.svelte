<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	onMount(async () => {
		dispatch('ready');
	});
</script>

<div class="render">
	<slot />
</div>

<style>
	.render {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: -1;
	}
</style>
