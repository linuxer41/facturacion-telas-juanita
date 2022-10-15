import { Return } from 'src/siap-soap/FacturacionOperaciones';
import { MensajesListDTO } from './MensajesList.dto';
export declare class ReturnDTO implements Return {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
