import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
export declare class ProductosService {
    private productosRepository;
    constructor(productosRepository: Repository<Producto>);
    create(createProductoDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    query(query: any): Promise<{
        statusCode: string;
        data: any[];
        count: any;
        currentPage: number;
        nextPage: number;
        prevPage: number;
        lastPage: number;
    }>;
}
