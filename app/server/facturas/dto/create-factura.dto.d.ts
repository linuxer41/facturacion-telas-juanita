import { User } from 'src/users/entities/user.entity';
import { FacturaItemDto } from './factura.item.dto';
export declare class CreateFacturaDto {
    numero: number;
    clientName: string | null;
    nit: string | null;
    items: FacturaItemDto[];
    xml: string;
    pdf: string;
    json: {
        [key: string]: any;
    };
    subtotal: number;
    descuento: number;
    total: number;
    cuf: string;
    cufd: string;
    estado: string;
    tipoEmision: string;
    fechaFactura: Date;
    user?: User;
}
