import { SolicitudNotificaRevocado } from 'src/siap-soap/FacturacionCodigos';
import { BaseCodigosDTO } from './BaseCodigos.dto';
export declare class SolicitudNotificaRevocadoDTO extends BaseCodigosDTO implements SolicitudNotificaRevocado {
    certificado?: string;
    codigoSucursal?: string;
    cuis?: string;
    fechaRevocacion?: string;
    razonRevocacion?: string;
}
