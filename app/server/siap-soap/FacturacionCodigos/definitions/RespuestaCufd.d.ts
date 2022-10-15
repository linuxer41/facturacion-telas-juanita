import { MensajesList } from './MensajesList';
export interface RespuestaCufd {
    codigo?: string;
    codigoControl?: string;
    direccion?: string;
    fechaVigencia?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
