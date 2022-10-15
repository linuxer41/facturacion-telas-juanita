import { MensajesListDTO } from './MensajesList.dto';
import { ListaCodigos1DTO } from './ListaCodigos1.dto';
import { RespuestaListaProductos } from 'src/siap-soap/FacturacionSincronizacion';
export declare class RespuestaListaProductosDTO implements RespuestaListaProductos {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
    listaCodigos?: ListaCodigos1DTO[];
}
