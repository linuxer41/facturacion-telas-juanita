import { BaseService } from './base';
class ClienteService extends BaseService {
	location = 'clientes';
	async getByNit(nit: string) {
		return await this.fetch(`/nit/${nit}`);
	}
}
export const clienteService = new ClienteService();
