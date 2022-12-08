<script lang="ts">
	import ActionIcon from '$lib/components/common/ActionIcon.svelte';
	import TitleBar from '$lib/components/common/TitleBar.svelte';
	import FilterButton from '$lib/components/filters/components/FilterButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import ExportReportModal from './ExportReportModal.svelte';
	export let title = '';
	export let filterCount = 0;
	export let showTools = false;
	export let hasPackage = false;
	const dispatch = createEventDispatcher();
	let showExportModal = false;
</script>

<div class="topbar">
	<TitleBar icon="ChevronLeft" {title} on:close={() => goto('/')} />
	<div class="icons">
		{#if hasPackage}
			<ActionIcon name="Backpack" icon_type="secondary" on:click={() => dispatch('package')} />
		{/if}
		{#if showTools}
			<FilterButton {filterCount} on:click={() => dispatch('filter')} />
			<ActionIcon name="ArrowDown" icon_type="primary" on:click={() => (showExportModal = true)} />
		{/if}
	</div>
</div>
{#if showExportModal}
	<ExportReportModal
		on:close={() => (showExportModal = false)}
		{title}
		on:export={() => {
			dispatch('export');
			showExportModal = false;
		}}
	/>
{/if}

<style lang="scss">
	.topbar {
		display: grid;
		grid-template-columns: 1fr auto;
		place-content: center;
		gap: 1rem;
		//padding: 0rem 0.5rem;
	}
	.icons {
		display: grid;
		grid-auto-flow: column;
		place-content: end;
		gap: 1rem;
		.download-toggle {
			position: relative;
			.download {
				position: absolute;
				top: calc(100% + 0.1rem);
				width: 120px;
				z-index: 10;
				right: 0;
				background-color: var(--background-color);
				box-shadow: var(--box-shadow-main);
				border-radius: 6px;
				margin: auto;
				display: grid;
				gap: 0.5rem;
				padding: 0.5rem;
				cursor: default;
				li {
					cursor: pointer;
				}
			}
		}
	}
</style>
