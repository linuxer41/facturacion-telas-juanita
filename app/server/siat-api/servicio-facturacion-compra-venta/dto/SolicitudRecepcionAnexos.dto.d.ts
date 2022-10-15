import { SolicitudRecepcionAnexos } from 'src/siap-soap/ServicioFacturacionCompraVenta';
import { BaseFacturacionCompraVentaDTO } from './BaseFacturacionCompraVenta.dto';
import { AnexosListDTO } from './AnexosList.dto';
export declare class SolicitudRecepcionAnexosDTO extends BaseFacturacionCompraVentaDTO implements SolicitudRecepcionAnexos {
    anexosList?: Array<AnexosListDTO>;
}
