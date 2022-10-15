import { SolicitudCufdMasivo } from 'src/siap-soap/FacturacionCodigos';
import { BaseCodigosDTO } from './BaseCodigos.dto';
import { DatosSolicitud1DTO } from './DatosSolicitud1.dto';
export declare class SolicitudCufdMasivoDTO extends BaseCodigosDTO implements SolicitudCufdMasivo {
    codigoModalidad?: string;
    datosSolicitud?: DatosSolicitud1DTO[];
}
