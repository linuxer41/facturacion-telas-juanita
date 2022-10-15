import { DatosSolicitud } from './DatosSolicitud';
export interface SolicitudCuisMasivoSistemas {
    codigoAmbiente?: string;
    codigoModalidad?: string;
    codigoSistema?: string;
    datosSolicitud?: Array<DatosSolicitud>;
    nit?: string;
}
