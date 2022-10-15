import { SolicitudCuis } from 'src/siap-soap/FacturacionCodigos';
import { BaseCodigosDTO } from './BaseCodigos.dto';
export declare class SolicitudCuisDTO extends BaseCodigosDTO implements SolicitudCuis {
    codigoModalidad?: string;
    codigoPuntoVenta?: string;
    codigoSucursal?: string;
}
