import { BaseService } from './base';
class CotizacionService extends BaseService {
	location = 'cotizaciones';
}
export const cotizacionService = new CotizacionService();
