import { Repository } from 'typeorm';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';
import { Cotizacion } from './entities/cotizacion.entity';
export declare class CotizacionesService {
    private cotizacionesRepository;
    constructor(cotizacionesRepository: Repository<Cotizacion>);
    create(createCotizacionDto: CreateCotizacionDto): Promise<Cotizacion>;
    findAll(): Promise<Cotizacion[]>;
    findOne(id: number): Promise<Cotizacion>;
    update(id: number, updateCotizacionDto: UpdateCotizacionDto): Promise<Cotizacion>;
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
