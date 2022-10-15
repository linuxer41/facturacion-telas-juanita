import { SolicitudRegistroPuntoVenta } from 'src/siap-soap/FacturacionOperaciones';
import { BaseOperacionesDTO } from './BaseOperaciones.dto';
export declare class SolicitudRegistroPuntoVentaDTO extends BaseOperacionesDTO implements SolicitudRegistroPuntoVenta {
    codigoModalidad?: string;
    codigoTipoPuntoVenta?: string;
    nombrePuntoVenta?: string;
    descripcion?: string;
}
