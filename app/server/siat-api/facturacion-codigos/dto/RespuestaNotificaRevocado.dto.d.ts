import { MensajesListDTO } from './MensajesList.dto';
import { RespuestaNotificaRevocado } from 'src/siap-soap/FacturacionCodigos';
export declare class RespuestaNotificaRevocadoDTO implements RespuestaNotificaRevocado {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
