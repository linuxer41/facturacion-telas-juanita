import { MensajesList } from './MensajesList';
import { ListaLeyendas } from './ListaLeyendas';
export interface RespuestaListaParametricasLeyendas {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
    listaLeyendas?: Array<ListaLeyendas>;
}
