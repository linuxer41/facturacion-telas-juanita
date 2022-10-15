<script lang="ts">
	import { getIcon } from '$lib/core/icons';
	export let filterCount = 0;
</script>

<i class="rounded-icon icon-20 secondary-icon" on:click>
	{@html getIcon({ name: 'Filter' }).filled}
	{#if filterCount}
		<div class="indicator">
			<h5>{filterCount}</h5>
		</div>
	{/if}
</i>

<style lang="scss">
	i {
		position: relative;
		.indicator {
			position: absolute;
			right: 0;
			bottom: 50%;
			width: 1rem;
			height: 1rem;
			background-color: var(--secondary-color);
			border-radius: 50%;
			display: grid;
			place-content: center;
			color: var(--primary-color);
			font-size: 0.8rem;
			text-align: center;
			z-index: 9;
		}
	}
</style>
