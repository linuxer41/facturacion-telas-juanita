import { RespuestaListaEventos } from 'src/siap-soap/FacturacionOperaciones';
import { ListaCodigosDTO } from './ListaCodigos.dto';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaListaEventosDTO implements RespuestaListaEventos {
    codigoRecepcionEventoSignificativo?: string;
    listaCodigos?: ListaCodigosDTO[];
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
