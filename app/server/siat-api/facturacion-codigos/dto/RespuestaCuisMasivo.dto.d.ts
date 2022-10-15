import { ListaRespuestasCuisDTO } from './ListaRespuestasCuis.dto';
import { MensajesListDTO } from './MensajesList.dto';
import { RespuestaCuisMasivo } from 'src/siap-soap/FacturacionCodigos';
export declare class RespuestaCuisMasivoDTO implements RespuestaCuisMasivo {
    listaRespuestasCuis?: Array<ListaRespuestasCuisDTO>;
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
