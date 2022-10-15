import { MensajesList } from './MensajesList';
export interface RespuestaPuntoVentaComisionista {
    codigoPuntoVenta?: string;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
