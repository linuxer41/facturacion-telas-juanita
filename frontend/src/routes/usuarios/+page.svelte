<script>
	import FacturasTable from '$lib/components/tables/FacturasTable.svelte';
	import UsuariosTable from '$lib/components/tables/UsuariosTable.svelte';

	const title = 'Usuarios';
</script>

<div class="route">
	<UsuariosTable {title} />
</div>

<style lang="scss">
	.route {
		display: grid;
	}
</style>
