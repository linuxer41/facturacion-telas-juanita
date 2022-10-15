import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { QueryFacturaDto } from './dto/query-factura.dto';
export declare class FacturasController {
    private readonly facturasService;
    constructor(facturasService: FacturasService);
    create(createFacturaDto: CreateFacturaDto): Promise<import("./entities/factura.entity").Factura>;
    findAll(query: QueryFacturaDto): Promise<{
        statusCode: string;
        data: any[];
        count: any;
        currentPage: number;
        nextPage: number;
        prevPage: number;
        lastPage: number;
    }>;
    findOne(id: string): Promise<import("./entities/factura.entity").Factura>;
    update(id: string, updateFacturaDto: UpdateFacturaDto): Promise<import("./entities/factura.entity").Factura>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
