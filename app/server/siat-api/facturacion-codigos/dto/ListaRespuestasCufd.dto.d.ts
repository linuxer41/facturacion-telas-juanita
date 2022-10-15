import { MensajesListDTO } from './MensajesList.dto';
import { ListaRespuestasCufd } from 'src/siap-soap/FacturacionCodigos';
export declare class ListaRespuestasCufdDTO implements ListaRespuestasCufd {
    codigo?: string;
    codigoControl?: string;
    codigoPuntoVenta?: string;
    codigoSucursal?: string;
    cuis?: string;
    direccion?: string;
    fechaVigencia?: string;
    mensajeServicioList?: MensajesListDTO[];
    transaccion?: string;
}
