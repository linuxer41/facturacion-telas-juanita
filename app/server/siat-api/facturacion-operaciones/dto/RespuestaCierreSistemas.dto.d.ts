import { RespuestaCierreSistemas } from 'src/siap-soap/FacturacionOperaciones';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaCierreSistemasDTO implements RespuestaCierreSistemas {
    codigoSistema?: string;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
