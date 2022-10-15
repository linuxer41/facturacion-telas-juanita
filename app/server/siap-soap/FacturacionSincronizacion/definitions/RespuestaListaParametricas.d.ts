import { MensajesList } from './MensajesList';
import { ListaCodigos } from './ListaCodigos';
export interface RespuestaListaParametricas {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
    listaCodigos?: Array<ListaCodigos>;
}
