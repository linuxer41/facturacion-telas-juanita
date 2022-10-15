import { MensajesList } from './MensajesList';
import { ListaActividadesDocumentoSector } from './ListaActividadesDocumentoSector';
export interface RespuestaListaActividadesDocumentoSector {
    mensajesList?: Array<MensajesList>;
    transaccion?: string;
    listaActividadesDocumentoSector?: Array<ListaActividadesDocumentoSector>;
}
