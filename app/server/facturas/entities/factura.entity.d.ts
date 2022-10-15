import { EntityHelper } from 'src/utils/entity-helper';
import { FacturaItemDto } from '../dto/factura.item.dto';
export declare class Factura extends EntityHelper {
    id: number;
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
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
