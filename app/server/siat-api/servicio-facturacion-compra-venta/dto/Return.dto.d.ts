import { MensajesList1DTO } from './MensajesList1.dto';
import { Return } from 'src/siap-soap/ServicioFacturacionCompraVenta';
export declare class ReturnDTO implements Return {
    mensajesList?: MensajesList1DTO[];
    transaccion?: string;
}
