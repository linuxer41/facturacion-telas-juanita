import { MensajesList1DTO } from './MensajesList1.dto';
import { RespuestaServicioFacturacion1 } from 'src/siap-soap/ServicioRecepcionCompras';
export declare class RespuestaServicioFacturacion1DTO implements RespuestaServicioFacturacion1 {
    archivo?: string;
    mensajesList?: MensajesList1DTO[];
    transaccion?: string;
}
