import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { QueryProductoDto } from './dto/query-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): Promise<import("./entities/producto.entity").Producto>;
    findAll(query: QueryProductoDto): Promise<{
        statusCode: string;
        data: any[];
        count: any;
        currentPage: number;
        nextPage: number;
        prevPage: number;
        lastPage: number;
    }>;
    findOne(id: string): Promise<import("./entities/producto.entity").Producto>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<import("./entities/producto.entity").Producto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
