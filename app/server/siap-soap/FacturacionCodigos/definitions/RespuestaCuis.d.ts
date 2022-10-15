import { MensajesList } from './MensajesList';
export interface RespuestaCuis {
    codigo?: string;
    fechaVigencia?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
