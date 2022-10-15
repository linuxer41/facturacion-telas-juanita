import { MensajesListDTO } from './MensajesList.dto';
import { RespuestaFechaHora } from 'src/siap-soap/FacturacionSincronizacion';
export declare class RespuestaFechaHoraDTO implements RespuestaFechaHora {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
    fechaHora?: string;
}
