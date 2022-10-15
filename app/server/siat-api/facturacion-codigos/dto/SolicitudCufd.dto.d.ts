import { SolicitudCufd } from 'src/siap-soap/FacturacionCodigos';
import { BaseCodigosDTO } from './BaseCodigos.dto';
export declare class SolicitudCufdDTO extends BaseCodigosDTO implements SolicitudCufd {
    codigoModalidad?: string;
    codigoPuntoVenta?: string;
    codigoSucursal?: string;
    cuis?: string;
}
