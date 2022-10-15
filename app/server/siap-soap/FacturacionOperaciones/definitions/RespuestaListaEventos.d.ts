import { ListaCodigos } from './ListaCodigos';
import { MensajesList } from './MensajesList';
export interface RespuestaListaEventos {
    codigoRecepcionEventoSignificativo?: string;
    listaCodigos?: Array<ListaCodigos>;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
