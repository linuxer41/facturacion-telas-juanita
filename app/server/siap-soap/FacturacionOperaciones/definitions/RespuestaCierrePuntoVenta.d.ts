import { MensajesList } from './MensajesList';
export interface RespuestaCierrePuntoVenta {
    codigoPuntoVenta?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
