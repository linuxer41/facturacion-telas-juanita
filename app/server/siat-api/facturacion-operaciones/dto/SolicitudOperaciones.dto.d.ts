import { SolicitudOperaciones } from 'src/siap-soap/FacturacionOperaciones';
import { BaseOperacionesDTO } from './BaseOperaciones.dto';
export declare class SolicitudOperacionesDTO extends BaseOperacionesDTO implements SolicitudOperaciones {
    codigoModalidad?: string;
    codigoPuntoVenta?: string;
}
