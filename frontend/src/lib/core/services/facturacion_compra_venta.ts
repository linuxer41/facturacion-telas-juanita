import { BaseSiatService } from './base_siat';
class FacturacionCompraVentaService extends BaseSiatService {
	location = 'servicio-facturacion-compra-venta';

	//     POST
	// /api/servicio-facturacion-compra-venta/recepcion-paquete-factura

	// POST
	// /api/servicio-facturacion-compra-venta/verificar-comunicacion

	// POST
	// /api/servicio-facturacion-compra-venta/recepcion-factura

	// POST
	// /api/servicio-facturacion-compra-venta/validacion-recepcion-masiva-factura

	// POST
	// /api/servicio-facturacion-compra-venta/recepcion-anexos

	// POST
	// /api/servicio-facturacion-compra-venta/recepcion-masiva-factura

	// POST
	// /api/servicio-facturacion-compra-venta/validacion-recepcion-paquete-factura

	// POST
	// /api/servicio-facturacion-compra-venta/verificacion-estado-factura

	// POST
	// /api/servicio-facturacion-compra-venta/anulacion-factura

	async recepcionPaqueteFactura(data): Promise<Response> {
		return this.fetch(`/recepcion-paquete-factura`, 'POST', data);
	}
	async verificarComunicacion(data): Promise<Response> {
		return this.fetch(`/verificar-comunicacion`, 'POST', data);
	}
	async recepcionFactura(data): Promise<Response> {
		return this.fetch(`/recepcion-factura`, 'POST', data);
	}
	async validacionRecepcionMasivaFactura(data): Promise<Response> {
		return this.fetch(`/validacion-recepcion-masiva-factura`, 'POST', data);
	}
	async recepcionAnexos(data): Promise<Response> {
		return this.fetch(`/recepcion-anexos`, 'POST', data);
	}
	async recepcionMasivaFactura(data): Promise<Response> {
		return this.fetch(`/recepcion-masiva-factura`, 'POST', data);
	}
	async validacionRecepcionPaqueteFactura(data): Promise<Response> {
		return this.fetch(`/validacion-recepcion-paquete-factura`, 'POST', data);
	}
	async verificacionEstadoFactura(data): Promise<Response> {
		return this.fetch(`/verificacion-estado-factura`, 'POST', data);
	}
	async anulacionFactura(data): Promise<Response> {
		return this.fetch(`/anulacion-factura`, 'POST', data);
	}
}
export const facturacionCompraVentaService = new FacturacionCompraVentaService();
