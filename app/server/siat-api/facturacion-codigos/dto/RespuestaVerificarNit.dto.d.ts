import { RespuestaVerificarNit } from 'src/siap-soap/FacturacionCodigos';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaVerificarNitDTO implements RespuestaVerificarNit {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
