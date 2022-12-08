import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Factura } from './entities/factura.entity';
export declare class FacturasService {
    private facturasRepository;
    private mailService;
    constructor(facturasRepository: Repository<Factura>, mailService: MailService);
    create(createFacturaDto: CreateFacturaDto): Promise<Factura>;
    findAll(): Promise<Factura[]>;
    findOne(id: number): Promise<Factura>;
    update(id: number, updateFacturaDto: UpdateFacturaDto): Promise<Factura>;
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
    packages(query: any): Promise<{
        statusCode: string;
        data: any[];
        count: any;
        currentPage: number;
        nextPage: number;
        prevPage: number;
        lastPage: number;
    }>;
    maxId(): Promise<any>;
    findByFechaFacturaRange(start: Date, end: Date, cufd: string): Promise<[Factura[], number]>;
    findByCufd(cufd: string): Promise<[Factura[], number]>;
    selectPendingCuisAndCount(): Promise<any>;
}
