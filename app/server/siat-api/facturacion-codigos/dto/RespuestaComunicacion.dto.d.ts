import { RespuestaComunicacion } from 'src/siap-soap/FacturacionCodigos';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaComunicacionDTO implements RespuestaComunicacion {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
