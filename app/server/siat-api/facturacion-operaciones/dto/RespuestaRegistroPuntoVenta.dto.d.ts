import { RespuestaRegistroPuntoVenta } from 'src/siap-soap/FacturacionOperaciones';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaRegistroPuntoVentaDTO implements RespuestaRegistroPuntoVenta {
    codigoPuntoVenta?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
