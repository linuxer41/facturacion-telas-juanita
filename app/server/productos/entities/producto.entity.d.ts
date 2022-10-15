import { EntityHelper } from 'src/utils/entity-helper';
export declare class Producto extends EntityHelper {
    id: number;
    detalle: string;
    codigoProducto: string;
    codigoProductoSiat: string;
    codigoUnidadMedida: string;
    cantidad: number;
    precio: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
