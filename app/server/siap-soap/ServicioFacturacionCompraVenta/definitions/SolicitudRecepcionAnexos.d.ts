import { AnexosList } from './AnexosList';
export interface SolicitudRecepcionAnexos {
    codigoAmbiente?: string;
    codigoDocumentoSector?: string;
    codigoEmision?: string;
    codigoModalidad?: string;
    codigoPuntoVenta?: string;
    codigoSistema?: string;
    codigoSucursal?: string;
    cufd?: string;
    cuis?: string;
    nit?: string;
    tipoFacturaDocumento?: string;
    anexosList?: Array<AnexosList>;
    cuf?: string;
}
