import { RespuestaCufdMasivo } from 'src/siap-soap/FacturacionCodigos';
import { ListaRespuestasCufdDTO } from './ListaRespuestasCufd.dto';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaCufdMasivoDTO implements RespuestaCufdMasivo {
    listaRespuestasCufd?: ListaRespuestasCufdDTO[];
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
