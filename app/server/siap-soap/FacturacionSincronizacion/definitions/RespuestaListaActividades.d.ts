import { MensajesList } from './MensajesList';
import { ListaActividades } from './ListaActividades';
export interface RespuestaListaActividades {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
    listaActividades?: Array<ListaActividades>;
}
