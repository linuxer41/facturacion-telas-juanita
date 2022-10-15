import { MensajesList } from './MensajesList';
export interface ListaRespuestasCufd {
    codigo?: string;
    codigoControl?: string;
    codigoPuntoVenta?: string;
    codigoSucursal?: string;
    cuis?: string;
    direccion?: string;
    fechaVigencia?: string;
    mensajeServicioList?: Array<MensajesList>;
    transaccion?: string;
}
