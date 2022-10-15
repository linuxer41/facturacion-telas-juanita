import { RespuestaCufd } from 'src/siap-soap/FacturacionCodigos';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaCufdDTO implements RespuestaCufd {
    codigo?: string;
    codigoControl?: string;
    direccion?: string;
    fechaVigencia?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
