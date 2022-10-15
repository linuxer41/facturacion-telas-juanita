import { SolicitudConsultaEvento } from 'src/siap-soap/FacturacionOperaciones';
import { BaseOperacionesDTO } from './BaseOperaciones.dto';
export declare class SolicitudConsultaEventoDTO extends BaseOperacionesDTO implements SolicitudConsultaEvento {
    codigoPuntoVenta?: string;
    cufd?: string;
    fechaEvento?: string;
}
