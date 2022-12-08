import { BaseSiatService } from './base_siat';
class FacturacionPrepararFacturaService extends BaseSiatService {
	location = 'preparar-factura';

	// POST
	// /api/preparar-factura/facturaCompraVenta

	async facturaCompraVenta(data): Promise<Response> {
		return this.fetch(`/facturaCompraVenta`, 'POST', data);
	}
	async validarPaquete(data): Promise<Response> {
		return this.fetch(`/validarPaquete`, 'POST', data);
	}
	async enviarEmailFactura(data): Promise<Response> {
		return this.fetch(`/enviarEmailFactura`, 'POST', data);
	}
	async anularEmailFactura(data): Promise<Response> {
		return this.fetch(`/anularEmailFactura`, 'POST', data);
	}
	async facturasPendientes(): Promise<Response> {
		return this.fetch(`/facturasPendientes`, 'GET');
	}
}
export const facturacionPrepararFacturaService = new FacturacionPrepararFacturaService();
