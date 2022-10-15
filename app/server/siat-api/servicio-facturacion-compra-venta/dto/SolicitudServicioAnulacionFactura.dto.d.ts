import { SolicitudServicioAnulacionFactura } from 'src/siap-soap/ServicioFacturacionCompraVenta';
import { BaseFacturacionCompraVentaDTO } from './BaseFacturacionCompraVenta.dto';
export declare class SolicitudServicioAnulacionFacturaDTO extends BaseFacturacionCompraVentaDTO implements SolicitudServicioAnulacionFactura {
    codigoMotivo?: string;
    cuf?: string;
}
