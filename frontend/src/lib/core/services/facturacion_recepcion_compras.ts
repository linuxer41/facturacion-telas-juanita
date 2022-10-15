import { BaseSiatService } from './base_siat';
class FacturacionRecepcionComprasService extends BaseSiatService {
	location = 'servicio-recepcion-compras';

	// POST
	// /api/servicio-recepcion-compras/verificar-comunicacion

	// POST
	// /api/servicio-recepcion-compras/validacion-recepcion-paquete-compras

	// POST
	// /api/servicio-recepcion-compras/recepcion-paquete-compras

	// POST
	// /api/servicio-recepcion-compras/anulacion-compra

	// POST
	// /api/servicio-recepcion-compras/confirmacion-compras

	// POST
	// /api/servicio-recepcion-compras/consulta-compras

	async verificarComunicacion(data): Promise<Response> {
		return this.fetch(`/verificar-comunicacion`, 'POST', data);
	}
	async validacionRecepcionPaqueteCompras(data): Promise<Response> {
		return this.fetch(`/validacion-recepcion-paquete-compras`, 'POST', data);
	}
	async recepcionPaqueteCompras(data): Promise<Response> {
		return this.fetch(`/recepcion-paquete-compras`, 'POST', data);
	}
	async anulacionCompra(data): Promise<Response> {
		return this.fetch(`/anulacion-compra`, 'POST', data);
	}
	async confirmacionCompras(data): Promise<Response> {
		return this.fetch(`/confirmacion-compras`, 'POST', data);
	}
	async consultaCompras(data): Promise<Response> {
		return this.fetch(`/consulta-compras`, 'POST', data);
	}
}
export const facturacionRecepcionComprasService = new FacturacionRecepcionComprasService();
