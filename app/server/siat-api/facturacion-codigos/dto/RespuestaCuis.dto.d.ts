import { MensajesListDTO } from './MensajesList.dto';
import { RespuestaCuis } from 'src/siap-soap/FacturacionCodigos';
export declare class RespuestaCuisDTO implements RespuestaCuis {
    codigo?: string;
    fechaVigencia?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
