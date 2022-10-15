import { SolicitudPuntoVentaComisionista } from 'src/siap-soap/FacturacionOperaciones';
import { BaseOperacionesDTO } from './BaseOperaciones.dto';
export declare class SolicitudPuntoVentaComisionistaDTO extends BaseOperacionesDTO implements SolicitudPuntoVentaComisionista {
    codigoModalidad?: string;
    descripcion?: string;
    fechaFin?: string;
    fechaInicio?: string;
    nitComisionista?: string;
    nombrePuntoVenta?: string;
    numeroContrato?: string;
}
