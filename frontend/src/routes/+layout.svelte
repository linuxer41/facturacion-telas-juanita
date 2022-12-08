<script lang="ts">
	import { loadAllLists, loadStore, parametricaEventosSignificativos } from '$lib/core/globals';
	import { snackBar } from '$lib/core/store';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { loadCufd, loadCuis } from '$lib/core/api_tools';
	import MainLayout from '../lib/components/layout/MainLayout.svelte';
	import { page } from '$app/stores';
	import { SETTINGS } from '$lib/core/config';
	import InfinitySpinner from '$lib/components/common/InfinitySpinner.svelte';
	loadStore();
	let loading = true;

	async function checkServer() {
		try {
			await fetch(SETTINGS.apiUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			return true;
		} catch (error) {
			return false;
		}
	}

	onMount(async () => {
		let server = await checkServer();
		while (!server) {
			server = await checkServer();
			await new Promise((r) => setTimeout(r, 1000));
		}
		await loadCuis();
		await loadCufd();
		
		await loadAllLists();
		// run loadAllLists() again every 5 minutes if parametricaEventosSignificativos lenqth is 0
		// setInterval(() => {
		// 	if (!(parametricaEventosSignificativos || [])) {
		// 		loadAllLists();
		// 	}
		// }, 15000);
		// select all imput execpt the email, password and submit type
		const inputs = document.querySelectorAll(
			'input:not([type="submit"]):not([type="email"]):not([type="password"])'
		);
		// document.querySelector('input')?.addEventListener('input', function (event) {
		// 	event.target.value = event.target.value.toLocaleUpperCase();
		// });
		inputs?.forEach((input) => {
			input.addEventListener('keyup', function (event) {
				event.target.value = event.target.value.toLocaleUpperCase();
			});
		});
		loading = false;
	});
</script>

{#if loading}
	<div class="loading">
		<InfinitySpinner />
		<p>Iniciando servicios SIAT...</p>
	</div>
{:else if $page.routeId !== 'auth'}
	<MainLayout>
		<slot />
	</MainLayout>
{:else}
	<slot />
{/if}

{#if $snackBar}
	<div
		in:fly={{ y: 200, duration: 2000 }}
		out:fade={{ delay: 10, duration: 2000 }}
		id="snackbar"
		class="snackbar show"
	>
		<!-- check type of $nackbar -->
		{#if typeof $snackBar === 'string'}
			<p>
				{$snackBar}
			</p>
		{/if}
	</div>
{/if}

<style lang="scss" global>
	@import 'src/scss/app';
	@import 'src/scss/icon';
	@import 'src/scss/table';
	@import 'src/scss/page';
	.loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>
