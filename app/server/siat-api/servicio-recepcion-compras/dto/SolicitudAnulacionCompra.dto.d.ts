import { SolicitudAnulacionCompra } from 'src/siap-soap/ServicioRecepcionCompras';
import { BaseRecepcionComprasDTO } from './BaseRecepcionCompras.dto';
export declare class SolicitudAnulacionCompraDTO extends BaseRecepcionComprasDTO implements SolicitudAnulacionCompra {
    codAutorizacion?: string;
    nitProveedor?: string;
    nroDuiDim?: string;
    nroFactura?: string;
}
