import { BaseSiatService } from './base_siat';
class FacturacionSincronizacionService extends BaseSiatService {
	location = 'facturacion-sincronizacion';

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-motivo-anulacion

	// POST
	// /api/facturacion-sincronizacion/sincronizar-actividades

	// POST
	// /api/facturacion-sincronizacion/sincronizar-fecha-hora

	// POST
	// /api/facturacion-sincronizacion/sincronizar-lista-leyendas-factura

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-habitacion

	// POST
	// /api/facturacion-sincronizacion/sincronizar-lista-actividades-documento-sector

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-documento-identidad

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-unidad-medida

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-documento-sector

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipos-factura

	// POST
	// /api/facturacion-sincronizacion/verificar-comunicacion

	// POST
	// /api/facturacion-sincronizacion/sincronizar-lista-mensajes-servicios

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-metodo-pago

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-eventos-significativos

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-punto-venta

	// POST
	// /api/facturacion-sincronizacion/sincronizar-lista-productos-servicios

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-emision

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-pais-origen

	// POST
	// /api/facturacion-sincronizacion/sincronizar-parametrica-tipo-moneda

	// sincronizar-parametrica-motivo-anulacion
	async sincronizarParametricaMotivoAnulacion(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-motivo-anulacion`, 'POST', data);
	}
	// sincronizar-actividades
	async sincronizarActividades(data): Promise<Response> {
		return this.fetch(`/sincronizar-actividades`, 'POST', data);
	}
	// sincronizar-fecha-hora
	async sincronizarFechaHora(data): Promise<Response> {
		return this.fetch(`/sincronizar-fecha-hora`, 'POST', data);
	}
	// sincronizar-lista-leyendas-factura
	async sincronizarListaLeyendasFactura(data): Promise<Response> {
		return this.fetch(`/sincronizar-lista-leyendas-factura`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-habitacion
	async sincronizarParametricaTipoHabitacion(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-habitacion`, 'POST', data);
	}
	// sincronizar-lista-actividades-documento-sector
	async sincronizarListaActividadesDocumentoSector(data): Promise<Response> {
		return this.fetch(`/sincronizar-lista-actividades-documento-sector`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-documento-identidad
	async sincronizarParametricaTipoDocumentoIdentidad(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-documento-identidad`, 'POST', data);
	}
	// sincronizar-parametrica-unidad-medida
	async sincronizarParametricaUnidadMedida(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-unidad-medida`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-documento-sector
	async sincronizarParametricaTipoDocumentoSector(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-documento-sector`, 'POST', data);
	}
	// sincronizar-parametrica-tipos-factura
	async sincronizarParametricaTiposFactura(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipos-factura`, 'POST', data);
	}
	// verificar-comunicacion
	async verificarComunicacion(data): Promise<Response> {
		return this.fetch(`/verificar-comunicacion`, 'POST', data);
	}
	// sincronizar-lista-mensajes-servicios
	async sincronizarListaMensajesServicios(data): Promise<Response> {
		return this.fetch(`/sincronizar-lista-mensajes-servicios`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-metodo-pago
	async sincronizarParametricaTipoMetodoPago(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-metodo-pago`, 'POST', data);
	}
	// sincronizar-parametrica-eventos-significativos
	async sincronizarParametricaEventosSignificativos(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-eventos-significativos`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-punto-venta
	async sincronizarParametricaTipoPuntoVenta(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-punto-venta`, 'POST', data);
	}
	// sincronizar-lista-productos-servicios
	async sincronizarListaProductosServicios(data): Promise<Response> {
		return this.fetch(`/sincronizar-lista-productos-servicios`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-emision
	async sincronizarParametricaTipoEmision(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-emision`, 'POST', data);
	}
	// sincronizar-parametrica-pais-origen
	async sincronizarParametricaPaisOrigen(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-pais-origen`, 'POST', data);
	}
	// sincronizar-parametrica-tipo-moneda
	async sincronizarParametricaTipoMoneda(data): Promise<Response> {
		return this.fetch(`/sincronizar-parametrica-tipo-moneda`, 'POST', data);
	}
}
export const facturacionSincronizacionService = new FacturacionSincronizacionService();
