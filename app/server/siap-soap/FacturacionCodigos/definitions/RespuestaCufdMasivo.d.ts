import { ListaRespuestasCufd } from './ListaRespuestasCufd';
import { MensajesList } from './MensajesList';
export interface RespuestaCufdMasivo {
    listaRespuestasCufd?: Array<ListaRespuestasCufd>;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
