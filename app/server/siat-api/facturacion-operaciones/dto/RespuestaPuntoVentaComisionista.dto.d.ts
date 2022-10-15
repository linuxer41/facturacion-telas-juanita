import { RespuestaPuntoVentaComisionista } from 'src/siap-soap/FacturacionOperaciones';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaPuntoVentaComisionistaDTO implements RespuestaPuntoVentaComisionista {
    codigoPuntoVenta?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
