import { EntityHelper } from 'src/utils/entity-helper';
import { CotizacionItemDto } from '../dto/cotizacion.item.dto';
export declare class Cotizacion extends EntityHelper {
    id: number;
    numero: number;
    clientName: string | null;
    nit: string | null;
    items: CotizacionItemDto[];
    subtotal: number;
    descuento: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
