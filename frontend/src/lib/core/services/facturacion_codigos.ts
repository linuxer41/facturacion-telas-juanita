import { BaseSiatService } from './base_siat';
class FacturacionCodigosService extends BaseSiatService {
	location = 'facturacion-codigos';

	//     POST
	// /api/facturacion-codigos/verificarComunicacion

	// POST
	// /api/facturacion-codigos/verificarNit

	// POST
	// /api/facturacion-codigos/cuisMasivo

	// POST
	// /api/facturacion-codigos/cufd

	// POST
	// /api/facturacion-codigos/notificaCertificadoRevocado

	// POST
	// /api/facturacion-codigos/cuis

	// POST
	// /api/facturacion-codigos/cufdMasivo

	async verificarComunicacion(data): Promise<Response> {
		return this.fetch(`/verificarComunicacion`, 'POST', data);
	}
	async verificarNit(data): Promise<Response> {
		return this.fetch(`/verificarNit`, 'POST', data);
	}
	async cuisMasivo(data): Promise<Response> {
		return this.fetch(`/cuisMasivo`, 'POST', data);
	}
	async cufd(data): Promise<Response> {
		return this.fetch(`/cufd`, 'POST', data);
	}
	async notificaCertificadoRevocado(data): Promise<Response> {
		return this.fetch(`/notificaCertificadoRevocado`, 'POST', data);
	}
	async cuis(data): Promise<Response> {
		return this.fetch(`/cuis`, 'POST', data);
	}
	async cufdMasivo(data): Promise<Response> {
		return this.fetch(`/cufdMasivo`, 'POST', data);
	}
}
export const facturacionCodigosService = new FacturacionCodigosService();
