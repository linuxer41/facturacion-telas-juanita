import { BaseQueryDto } from 'src/utils/api';
export declare class QueryFacturaDto extends BaseQueryDto {
    clientName: string;
    nit: string;
    numero: string;
    cuf: string;
    tipoEmision: string;
    estado: string;
}
