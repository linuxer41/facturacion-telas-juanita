import { MensajesList1 } from './MensajesList1';
export interface RespuestaServicioFacturacion1 {
    archivo?: string;
    mensajesList?: Array<MensajesList1>;
    transaccion?: string;
}
