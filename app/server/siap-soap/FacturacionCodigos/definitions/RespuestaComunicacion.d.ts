import { MensajesList } from './MensajesList';
export interface RespuestaComunicacion {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
