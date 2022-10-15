import { MensajesList1 } from './MensajesList1';
export interface RespuestaServicioFacturacion {
    codigoDescripcion?: string;
    codigoEstado?: string;
    codigoRecepcion?: string;
    mensajesList?: Array<MensajesList1>;
    transaccion?: string;
}
