<script>
	import FacturasContingencia from '$lib/components/tables/FacturasContingencia.svelte';

	import FacturasTable from '$lib/components/tables/FacturasTable.svelte';

	const title = 'Facturas de contingencia';
</script>

<div class="route">
	<FacturasContingencia {title} />
</div>

<style lang="scss">
	.route {
		display: grid;
	}
</style>
