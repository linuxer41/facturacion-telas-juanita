import { ListaPuntosVentas } from './ListaPuntosVentas';
import { MensajesList } from './MensajesList';
export interface RespuestaConsultaPuntoVenta {
    listaPuntosVentas?: Array<ListaPuntosVentas>;
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
}
