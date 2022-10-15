import { SolicitudVerificarNit } from 'src/siap-soap/FacturacionCodigos';
import { BaseCodigosDTO } from './BaseCodigos.dto';
export declare class SolicitudVerificarNitDTO extends BaseCodigosDTO implements SolicitudVerificarNit {
    codigoModalidad?: string;
    codigoSucursal?: string;
    cuis?: string;
    nitParaVerificacion?: string;
}
