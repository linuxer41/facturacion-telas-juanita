import { MensajesListDTO } from './MensajesList.dto';
import { Return } from 'src/siap-soap/ServicioRecepcionCompras';
export declare class ReturnDTO implements Return {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
