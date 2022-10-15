import { MensajesList } from './MensajesList';
export interface RespuestaCierreSistemas {
    codigoSistema?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
