import { SolicitudCierrePuntoVenta } from 'src/siap-soap/FacturacionOperaciones';
import { BaseOperacionesDTO } from './BaseOperaciones.dto';
export declare class SolicitudCierrePuntoVentaDTO extends BaseOperacionesDTO implements SolicitudCierrePuntoVenta {
    codigoPuntoVenta?: string;
}
