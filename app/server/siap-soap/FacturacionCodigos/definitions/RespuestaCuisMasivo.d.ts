import { ListaRespuestasCuis } from './ListaRespuestasCuis';
import { MensajesList } from './MensajesList';
export interface RespuestaCuisMasivo {
    listaRespuestasCuis?: Array<ListaRespuestasCuis>;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
