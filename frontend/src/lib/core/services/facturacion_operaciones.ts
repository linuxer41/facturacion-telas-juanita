import { BaseSiatService } from './base_siat';
class FacturacionOperacionesService extends BaseSiatService {
	location = 'facturacion-operaciones';

	// POST
	// /api/facturacion-operaciones/verificar-comunicacion

	// POST
	// /api/facturacion-operaciones/registro-punto-venta

	// POST
	// /api/facturacion-operaciones/registro-punto-venta-comisionista

	// POST
	// /api/facturacion-operaciones/cierre-operaciones-sistema

	// POST
	// /api/facturacion-operaciones/consulta-evento-significativo

	// POST
	// /api/facturacion-operaciones/consulta-punto-venta

	// POST
	// /api/facturacion-operaciones/registro-evento-significativo

	// POST
	// /api/facturacion-operaciones/cierre-punto-venta

	async verificarComunicacion(data): Promise<Response> {
		return this.fetch(`/verificar-comunicacion`, 'POST', data);
	}
	async registroPuntoVenta(data): Promise<Response> {
		return this.fetch(`/registro-punto-venta`, 'POST', data);
	}
	async registroPuntoVentaComisionista(data): Promise<Response> {
		return this.fetch(`/registro-punto-venta-comisionista`, 'POST', data);
	}
	async cierreOperacionesSistema(data): Promise<Response> {
		return this.fetch(`/cierre-operaciones-sistema`, 'POST', data);
	}
	async consultaEventoSignificativo(data): Promise<Response> {
		return this.fetch(`/consulta-evento-significativo`, 'POST', data);
	}
	async consultaPuntoVenta(data): Promise<Response> {
		return this.fetch(`/consulta-punto-venta`, 'POST', data);
	}
	async registroEventoSignificativo(data): Promise<Response> {
		return this.fetch(`/registro-evento-significativo`, 'POST', data);
	}
	async cierrePuntoVenta(data): Promise<Response> {
		return this.fetch(`/cierre-punto-venta`, 'POST', data);
	}
}
export const facturacionOperacionesService = new FacturacionOperacionesService();
