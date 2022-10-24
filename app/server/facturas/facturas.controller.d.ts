import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { QueryFacturaDto } from './dto/query-factura.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class FacturasController {
    private readonly facturasService;
    private readonly usersService;
    constructor(facturasService: FacturasService, usersService: UsersService);
    create(createFacturaDto: CreateFacturaDto, user: User): Promise<import("./entities/factura.entity").Factura>;
    findAll(query: QueryFacturaDto, user: User): Promise<{
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
