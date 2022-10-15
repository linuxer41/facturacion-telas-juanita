import { ListaRespuestasCuis } from 'src/siap-soap/FacturacionCodigos';
import { MensajesListDTO } from './MensajesList.dto';
export declare class ListaRespuestasCuisDTO implements ListaRespuestasCuis {
    codigo?: string;
    codigoPuntoVenta?: string;
    codigoSucursal?: string;
    fechaVigencia?: string;
    mensajeServicioList?: MensajesListDTO[];
    transaccion?: string;
}
