import { MensajesList } from './MensajesList';
export interface RespuestaNotificaRevocado {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
