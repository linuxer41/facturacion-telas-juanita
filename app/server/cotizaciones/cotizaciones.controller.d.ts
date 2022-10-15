import { CotizacionesService } from './cotizaciones.service';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { QueryCotizacionDto } from './dto/query-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';
export declare class CotizacionesController {
    private readonly cotizacionesService;
    constructor(cotizacionesService: CotizacionesService);
    create(createCotizacioneDto: CreateCotizacionDto): Promise<import("./entities/cotizacion.entity").Cotizacion>;
    findAll(query: QueryCotizacionDto): Promise<{
        statusCode: string;
        data: any[];
        count: any;
        currentPage: number;
        nextPage: number;
        prevPage: number;
        lastPage: number;
    }>;
    findOne(id: string): Promise<import("./entities/cotizacion.entity").Cotizacion>;
    update(id: string, updateCotizacioneDto: UpdateCotizacionDto): Promise<import("./entities/cotizacion.entity").Cotizacion>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
