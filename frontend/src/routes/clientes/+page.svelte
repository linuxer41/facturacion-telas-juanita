<script>
	import ClientesTable from '$lib/components/tables/ClientesTable.svelte';

	const title = 'Clientes';
</script>

<div class="route">
	<ClientesTable {title} />
</div>

<style lang="scss">
	.route {
		display: grid;
	}
</style>
