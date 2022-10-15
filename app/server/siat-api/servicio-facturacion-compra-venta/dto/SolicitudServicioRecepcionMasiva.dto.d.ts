import { SolicitudServicioRecepcionMasiva } from 'src/siap-soap/ServicioFacturacionCompraVenta';
import { BaseFacturacionCompraVentaDTO } from './BaseFacturacionCompraVenta.dto';
export declare class SolicitudServicioRecepcionMasivaDTO extends BaseFacturacionCompraVentaDTO implements SolicitudServicioRecepcionMasiva {
    archivo?: string;
    hashArchivo?: string;
    fechaEnvio?: string;
    cantidadFacturas?: string;
}
