import { MensajesList } from './MensajesList';
import { ListaCodigos1 } from './ListaCodigos1';
export interface RespuestaListaProductos {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
    listaCodigos?: Array<ListaCodigos1>;
}
