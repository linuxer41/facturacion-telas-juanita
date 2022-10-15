<script lang="ts">
	import {
		addToCart,
		emptyCart,
		enviarFactura,
		loadEventosSignificativos,
		registrarEvento,
		validarFacturas
	} from '$lib/core/api_tools';

	import {
		parametricaEventosSignificativos,
		parametricaMotivoDeAnulacion
	} from '$lib/core/globals';
	import { cafc, facturacionManual, snackBar } from '$lib/core/store';
	import { createEventDispatcher, onMount } from 'svelte';
	import Modal from '../common/Modal.svelte';
	export let siatExtraData: any = {};
	export let facturas: Factura[];
	let selected = 1;

	function onChange(event) {
		selected = Number(event.currentTarget.value);
	}
	let eventosSignificativos = [];
	const fechaFacturas = {
		inicio: null as Date,
		fin: null as Date
	};
	const dispatch = createEventDispatcher();
	console.log({ parametricaMotivoDeAnulacion });

	async function _registrarEvento() {
		try {
			const fechaHoraFinEvento = new Date(fechaFacturas.fin);
			const fechaHoraInicioEvento = new Date(fechaFacturas.inicio);
			const evento = await registrarEvento(
				siatExtraData.codigoMotivoEvento,
				fechaHoraInicioEvento,
				fechaHoraFinEvento,
				siatExtraData.descripcion
			);
			snackBar.show('Evento registrado exitosamente');
			if (evento) {
				dispatch('evento', evento);
			}
			facturacionManual.sync(true)
		} catch (error) {
			snackBar.show((error as Error).message);
		}
	}

	onMount(async () => {
		eventosSignificativos = await loadEventosSignificativos();
	});
</script>

<Modal title="Eventos significativos" on:close>
	<div class="details">
		<!-- <div class="radio">
			<label
				><input
					checked={selected === 1}
					on:change={onChange}
					type="radio"
					name="accion"
					value="1"
				/>Registrar</label
			>
			<label
				><input
					checked={selected === 2}
					on:change={onChange}
					type="radio"
					name="accion"
					value="2"
				/> Seleccionar Existente</label
			>
		</div> -->
		{#if selected === 1}
			<div>
				<label for="">Descripcion</label>
				<input type="text" bind:value={siatExtraData.descripcion} />
			</div>
			<div>
				<label for="">Tipo de evento</label>
				<select name="Metodo de pago" id="" bind:value={siatExtraData.codigoMotivoEvento}>
					{#each (parametricaEventosSignificativos || []).slice(4,7) as evento}
						<option value={evento.codigoClasificador}>{evento.descripcion}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="">Fecha y hora de inicio</label>
				<input type="datetime-local" bind:value={fechaFacturas.inicio} />
			</div>
			<div>
				<label for="">Fecha y hora de fin</label>
				<input type="datetime-local" bind:value={fechaFacturas.fin} />
			</div>
			<div>
				<label for="">Cafc</label>
				<input type="text" 
				name="cafc"
				id="cafc"
				value={$cafc}
				on:change={(e) => cafc.sync(e.currentTarget.value)}/>
			</div>
			<div>
				<button on:click={_registrarEvento}> Confirmar </button>
			</div>
		{:else}
			<div>
				<h6 for="">Eventos significativos</h6>
				{#if eventosSignificativos.length}
					<ul class="list">
						{#each eventosSignificativos as evento}
							<li class="item" on:click={() => dispatch('evento', evento)}>
								<div class="title">
									<h5>{evento.descripcion}</h5>
								</div>
								<div class="dates">
									<h6>Desde:</h6>
									<span>
										{evento.fechaInicio}
									</span>
									<h6>Hasta:</h6>
									<span>
										{evento.fechaFin}
									</span>
								</div>
							</li>
						{/each}
					</ul>
				{:else}
					<p>No existen eventos significativos registrados</p>
				{/if}
			</div>
		{/if}
	</div>
</Modal>

<style lang="scss">
	.details {
		padding: 0.5rem;
		display: grid;
		gap: 1rem;
		button {
			padding: 0.5rem;
			box-shadow: var(--box-shadow-main);
			background-color: var(--primary-color);
			color: var(--text-color-on-primary);
			border-radius: 20px;
		}
	}
	.radio {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: max-content;
		gap: 1rem;
		label {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			gap: 0.5rem;
		}
		input {
			width: min-content !important;
		}
	}
	.list {
		display: grid;
		gap: 0.5rem;
		.item {
			display: grid;
			padding: 0.5rem;
			box-shadow: var(--box-shadow-main);
			border-radius: 3px;
			cursor: pointer;
			.dates {
				display: grid;
				gap: 0.5rem;
				grid-auto-flow: column dense;
				grid-auto-columns: max-content;
				place-items: center start;
				span {
					color: var(--text-color-light);
				}
			}
		}
	}
</style>
