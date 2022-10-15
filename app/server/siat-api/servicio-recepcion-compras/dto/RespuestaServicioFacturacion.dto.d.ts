import { MensajesList1DTO } from './MensajesList1.dto';
import { RespuestaServicioFacturacion } from 'src/siap-soap/ServicioRecepcionCompras';
export declare class RespuestaServicioFacturacionDTO implements RespuestaServicioFacturacion {
    codigoDescripcion?: string;
    codigoEstado?: string;
    codigoRecepcion?: string;
    mensajesList?: MensajesList1DTO[];
    transaccion?: string;
}
