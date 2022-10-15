import { CotizacionItemDto } from './cotizacion.item.dto';
export declare class CreateCotizacionDto {
    numero: number;
    clientName: string | null;
    nit: string | null;
    items: CotizacionItemDto[];
    subtotal: number;
    descuento: number;
    total: number;
}
