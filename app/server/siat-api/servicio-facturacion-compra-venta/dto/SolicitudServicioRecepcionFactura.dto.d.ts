import { SolicitudServicioRecepcionFactura } from 'src/siap-soap/ServicioFacturacionCompraVenta';
import { BaseFacturacionCompraVentaDTO } from './BaseFacturacionCompraVenta.dto';
export declare class SolicitudServicioRecepcionFacturaDTO extends BaseFacturacionCompraVentaDTO implements SolicitudServicioRecepcionFactura {
    archivo?: string;
    hashArchivo?: string;
    fechaEnvio?: string;
}
