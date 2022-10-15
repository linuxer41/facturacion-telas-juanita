import { MensajesListDTO } from './MensajesList.dto';
import { ListaLeyendasDTO } from './ListaLeyendas.dto';
import { RespuestaListaParametricasLeyendas } from 'src/siap-soap/FacturacionSincronizacion';
export declare class RespuestaListaParametricasLeyendasDTO implements RespuestaListaParametricasLeyendas {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
    listaLeyendas?: ListaLeyendasDTO[];
}
