import { MensajesListDTO } from './MensajesList.dto';
import { ListaActividadesDocumentoSectorDTO } from './ListaActividadesDocumentoSector.dto';
import { RespuestaListaActividadesDocumentoSector } from 'src/siap-soap/FacturacionSincronizacion';
export declare class RespuestaListaActividadesDocumentoSectorDTO implements RespuestaListaActividadesDocumentoSector {
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
    listaActividadesDocumentoSector?: ListaActividadesDocumentoSectorDTO[];
}
