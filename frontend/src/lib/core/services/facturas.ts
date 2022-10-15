import { BaseService } from './base';
class FacturaService extends BaseService {
	location = 'facturas';
}
export const facturaService = new FacturaService();
