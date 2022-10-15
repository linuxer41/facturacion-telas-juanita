import { SolicitudServicioRecepcionPaquete } from 'src/siap-soap/ServicioFacturacionCompraVenta';
import { BaseFacturacionCompraVentaDTO } from './BaseFacturacionCompraVenta.dto';
export declare class SolicitudServicioRecepcionPaqueteDTO extends BaseFacturacionCompraVentaDTO implements SolicitudServicioRecepcionPaquete {
    archivo?: string;
    hashArchivo?: string;
    fechaEnvio?: string;
    cantidadFacturas?: string;
    codigoEvento?: string;
    cafc?: string;
}
