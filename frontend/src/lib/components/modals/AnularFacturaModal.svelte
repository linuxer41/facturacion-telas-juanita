<script lang="ts">
	import { parametricaMotivoDeAnulacion } from '$lib/core/globals';
	import {
		facturacionCompraVentaService,
		facturacionPrepararFacturaService,
		facturaService
	} from '$lib/core/services';
	import {
		codigoAmbiente,
		codigoDocumentoSector,
		codigoModalidad,
		codigoSistema,
		codigoTipoEmision,
		cufd,
		cuis,
		nit,
		snackBar
	} from '$lib/core/store';
	import { createEventDispatcher } from 'svelte';
	import Modal from '../common/Modal.svelte';
	export let siatExtraData: any = {};
	export let factura: Factura;
	const dispatch = createEventDispatcher();

	async function anularFactura() {
		try {
			const response = await facturacionCompraVentaService.anulacionFactura({
				codigoAmbiente: $codigoAmbiente,
				codigoDocumentoSector: $codigoDocumentoSector,
				codigoEmision: $codigoTipoEmision,
				codigoModalidad: $codigoModalidad,
				codigoPuntoVenta: factura.json.cabecera.codigoPuntoVenta,
				codigoSistema: $codigoSistema,
				codigoSucursal: factura.json.cabecera.codigoSucursal,
				cufd: $cufd?.codigo,
				cuis: $cuis?.codigo,
				nit: $nit,
				tipoFacturaDocumento: factura.json.cabecera?.tipoFacturaDocumento || 1,
				codigoMotivo: siatExtraData.codigoMotivo,
				cuf: factura.cuf
			});

			if (response.ok) {
				const result = await response.json();
				if (result.transaccion === true) {
					const a = facturacionPrepararFacturaService.anularEmailFactura({
						idFactura: factura.id,
						motivo:
							parametricaMotivoDeAnulacion.find(
								(x) => x.codigoClasificador === siatExtraData.codigoMotivo
							).descripcion || 'Otro'
					});
					dispatch('success', factura);
				} else {
					snackBar.show(result.mensajesList[0]?.descripcion || 'Error desconocido');
				}
			} else {
				console.log(await response.text());
			}
		} catch (error) {}
	}
</script>

<Modal title="Anular Factura" on:close>
	<div class="details">
		<div>
			<label for="">Motivo de anulacion</label>
			<select name="Metodo de pago" id="" bind:value={siatExtraData.codigoMotivo}>
				{#each parametricaMotivoDeAnulacion as motivo}
					<option value={motivo.codigoClasificador}>{motivo.descripcion}</option>
				{/each}
			</select>
		</div>
		<div>
			<button on:click={anularFactura}> Confirmar </button>
		</div>
	</div>
</Modal>

<style lang="scss">
	.details {
		padding: 0.5rem;
		display: grid;
		gap: 1rem;
		select {
			border-radius: 6px;
			padding: 0.5rem;
			border: 1px solid #ccc;
			option {
				padding: 0.5rem 1rem;
				&:hover {
					background-color: #ccc;
				}
			}
		}
		button {
			padding: 0.5rem;
			box-shadow: var(--box-shadow-main);
			background-color: var(--primary-color);
			color: var(--text-color-on-primary);
			border-radius: 20px;
		}
	}
</style>
