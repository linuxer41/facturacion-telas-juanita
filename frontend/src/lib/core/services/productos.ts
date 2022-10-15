import { BaseService } from './base';
class ProductoService extends BaseService {
	location = 'productos';
}
export const productoService = new ProductoService();
