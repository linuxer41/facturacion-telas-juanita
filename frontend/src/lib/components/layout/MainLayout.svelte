<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { user } from '$lib/core/store';
	const routes = [
		{
			path: '/',
			label: 'Home'
		},

		{
			path: '/facturas',
			label: 'Facturas'
		},
		// {
		// 	path: '/cotizaciones',
		// 	label: 'Cotizaciones'
		// },
		{
			path: '/productos',
			label: 'Productos'
		},
		{
			path: '/clientes',
			label: 'Clientes'
		},
		{
			path: '/contingencia',
			label: 'Contingencia'
		},
		{
			path: '/configuracion',
			label: 'Configuración'
		}
	];
	if(($user?.role?.id === 1)){
		// append to 4 position
		routes.splice(4, 0, {
			path: '/usuarios',
			label: 'Usuarios'
		});
		// routes.splice(4,1);
	}
</script>

<main>
	<div class="appContent">
		<slot />
	</div>
	<div class="toolbar">
		{#each routes as route}
			<div class="link" on:click={async()=>await goto(route.path)} class:active={$page.url.pathname === route.path}>
				{route.label}
			</div>
		{/each}
	</div>
	<!-- <div class="iframe">
		<iframe
			src="https://sisegusa.com.bo/media/root/sitio-web/media/product/image/4709.png"
			title="camaras"
			frameborder="0"
		/>
		<iframe
			src="http://192.168.1.51"
			title="camaras"
			frameborder="0"
		>
			No puede conectar
		</iframe>
	</div> -->
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		height: 100%;
		width: 100%;
		padding: 0.5rem;
		.appContent {
			display: grid;
			grid-template-rows: 1fr auto;
			gap: 0.5rem;
			padding: 00.5rem;
			border-right: 1px solid var(--border-color);
			height: 100%;
			overflow: hidden;
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr;
		}
		.toolbar {
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr;
			grid-auto-flow: column;
			overflow: auto;
		}
		.toolbar {
			display: grid;
			grid-template-columns: repeat(auto-fit, 150px);
			// place-content: center;
			place-items: center;
			padding: 0.5rem;
			gap: 0.5rem;
			.link {
				padding: 0.5rem 1rem;
				text-decoration: none;
				box-shadow: var(--box-shadow-main);
				width: 100%;
				border-radius: 20px;
				text-align: center;
				font-size: larger;
				cursor: pointer;
			}
			.active {
				background-color: var(--primary-color);
				color: var(--text-color-on-primary);
			}
		}
	}
</style>
