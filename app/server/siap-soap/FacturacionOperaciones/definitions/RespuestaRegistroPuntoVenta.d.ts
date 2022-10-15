import { MensajesList } from './MensajesList';
export interface RespuestaRegistroPuntoVenta {
    codigoPuntoVenta?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
