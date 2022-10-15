import { DatosSolicitud1 } from './DatosSolicitud1';
export interface SolicitudCufdMasivo {
    codigoAmbiente?: string;
    codigoModalidad?: string;
    codigoSistema?: string;
    datosSolicitud?: Array<DatosSolicitud1>;
    nit?: string;
}
