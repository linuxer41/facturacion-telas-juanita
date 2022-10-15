import { SolicitudEventoSignificativo } from 'src/siap-soap/FacturacionOperaciones';
import { BaseOperacionesDTO } from './BaseOperaciones.dto';
export declare class SolicitudEventoSignificativoDTO extends BaseOperacionesDTO implements SolicitudEventoSignificativo {
    codigoMotivoEvento?: string;
    codigoPuntoVenta?: string;
    cufd?: string;
    cufdEvento?: string;
    descripcion?: string;
    fechaHoraFinEvento?: string;
    fechaHoraInicioEvento?: string;
}
