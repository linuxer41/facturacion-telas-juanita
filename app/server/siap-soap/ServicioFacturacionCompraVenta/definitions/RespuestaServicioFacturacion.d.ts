import { MensajesList } from './MensajesList';
export interface RespuestaServicioFacturacion {
    codigoDescripcion?: string;
    codigoEstado?: string;
    codigoRecepcion?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
