import { RespuestaCierrePuntoVenta } from 'src/siap-soap/FacturacionOperaciones';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaCierrePuntoVentaDTO implements RespuestaCierrePuntoVenta {
    codigoPuntoVenta?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
