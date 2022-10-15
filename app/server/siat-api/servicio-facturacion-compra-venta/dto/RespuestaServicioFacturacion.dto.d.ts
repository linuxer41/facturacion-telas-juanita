import { MensajesListDTO } from './MensajesList.dto';
import { RespuestaServicioFacturacion } from 'src/siap-soap/ServicioFacturacionCompraVenta';
export declare class RespuestaServicioFacturacionDTO implements RespuestaServicioFacturacion {
    codigoDescripcion?: string;
    codigoEstado?: string;
    codigoRecepcion?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
