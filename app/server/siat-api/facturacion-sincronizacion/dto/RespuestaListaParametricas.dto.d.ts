import { MensajesListDTO } from './MensajesList.dto';
import { ListaCodigosDTO } from './ListaCodigos.dto';
import { RespuestaListaParametricas } from 'src/siap-soap/FacturacionSincronizacion';
export declare class RespuestaListaParametricasDTO implements RespuestaListaParametricas {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
    listaCodigos?: ListaCodigosDTO[];
}
