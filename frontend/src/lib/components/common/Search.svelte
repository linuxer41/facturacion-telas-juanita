<script lang="ts">
	import { getIcon } from '$lib/core/icons';

	import { createEventDispatcher, onMount } from 'svelte';
	export let keyword;
	export let placeholder = 'Buscar';
	const dispatch = createEventDispatcher();
	function debounce(func, wait = 500) {
		let timeout;
		return function () {
			// @ts-ignore
			const context = this;
			const args = arguments;
			const later = function () {
				timeout = null;
				func.apply(context, args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}
	const onKeyUp = debounce(async () => {
		// if (keyword) {
		// 	dispatch('search', keyword);
		// }
		dispatch('search', keyword);
	}, 500);
	onMount(() => {
		const input = document.getElementById('search-input');
		input?.focus();
	});
</script>

<div class="search">
	<i class="icon icon-20">
		{@html getIcon({ name: 'Search' }).filled}
	</i>
	<input type="text" id="search-input" {placeholder} bind:value={keyword} on:input={onKeyUp} />
</div>

<style lang="scss">
	::placeholder {
		opacity: 0.5; /* Firefox */
		font-size: 0.95rem;
	}
	i {
		opacity: 0.5;
	}
	.search {
		z-index: 1;
		display: grid;
		grid-template-columns: auto 1fr;
		border-bottom: 1px solid var(--border-color);
		gap: 1rem;
		max-width: 500px;
		@media screen and (max-width: 500px) {
			width: 100%;
		}
		input {
			width: 100%;
			padding: 0.3rem;
			border: none;
			background-color: var(--background-color);

			color: var(--text-color);
		}
	}
</style>
