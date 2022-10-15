import { SolicitudCuisMasivoSistemas } from 'src/siap-soap/FacturacionCodigos';
import { BaseCodigosDTO } from './BaseCodigos.dto';
import { DatosSolicitudDTO } from './DatosSolicitud.dto';
export declare class SolicitudCuisMasivoSistemasDTO extends BaseCodigosDTO implements SolicitudCuisMasivoSistemas {
    codigoModalidad?: string;
    datosSolicitud?: DatosSolicitudDTO[];
}
