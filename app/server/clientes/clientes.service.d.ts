import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
export declare class ClientesService {
    private clientesRepository;
    constructor(clientesRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    query(query: any): Promise<{
        statusCode: string;
        data: any[];
        count: any;
        currentPage: number;
        nextPage: number;
        prevPage: number;
        lastPage: number;
    }>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): Promise<Cliente>;
    findOneByNit(nit: string): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
