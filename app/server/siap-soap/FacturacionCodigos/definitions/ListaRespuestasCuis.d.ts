import { MensajesList } from './MensajesList';
export interface ListaRespuestasCuis {
    codigo?: string;
    codigoPuntoVenta?: string;
    codigoSucursal?: string;
    fechaVigencia?: string;
    mensajeServicioList?: Array<MensajesList>;
    transaccion?: string;
}
