import { MensajesListDTO } from './MensajesList.dto';
import { ListaActividadesDTO } from './ListaActividades.dto';
import { RespuestaListaActividades } from 'src/siap-soap/FacturacionSincronizacion';
export declare class RespuestaListaActividadesDTO implements RespuestaListaActividades {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
    listaActividades?: ListaActividadesDTO[];
}
