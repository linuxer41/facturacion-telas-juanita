import { MensajesList } from './MensajesList';
export interface RespuestaFechaHora {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
    fechaHora?: string;
}
