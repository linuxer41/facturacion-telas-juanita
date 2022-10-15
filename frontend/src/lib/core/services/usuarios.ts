import { BaseService } from './base';
class UsuarioService extends BaseService {
	location = 'v1/users';
	async getByEmail(email: string) {
		return await this.fetch(`/email/${email}`);
	}
	async register(data: any) {
		return await this.fetch(`/auth/email/register`, 'POST', data);
	}
}
export const usuarioService = new UsuarioService();
