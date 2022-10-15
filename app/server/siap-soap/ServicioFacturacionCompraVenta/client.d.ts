import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from 'soap';
import { TnsrecepcionPaqueteFactura } from './definitions/TnsrecepcionPaqueteFactura';
import { TnsrecepcionPaqueteFacturaResponse } from './definitions/TnsrecepcionPaqueteFacturaResponse';
import { TnsverificarComunicacion } from './definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from './definitions/TnsverificarComunicacionResponse';
import { TnsrecepcionFactura } from './definitions/TnsrecepcionFactura';
import { TnsrecepcionFacturaResponse } from './definitions/TnsrecepcionFacturaResponse';
import { TnsvalidacionRecepcionMasivaFactura } from './definitions/TnsvalidacionRecepcionMasivaFactura';
import { TnsvalidacionRecepcionMasivaFacturaResponse } from './definitions/TnsvalidacionRecepcionMasivaFacturaResponse';
import { TnsrecepcionAnexos } from './definitions/TnsrecepcionAnexos';
import { TnsrecepcionAnexosResponse } from './definitions/TnsrecepcionAnexosResponse';
import { TnsrecepcionMasivaFactura } from './definitions/TnsrecepcionMasivaFactura';
import { TnsrecepcionMasivaFacturaResponse } from './definitions/TnsrecepcionMasivaFacturaResponse';
import { TnsverificacionEstadoFactura } from './definitions/TnsverificacionEstadoFactura';
import { TnsverificacionEstadoFacturaResponse } from './definitions/TnsverificacionEstadoFacturaResponse';
import { TnsvalidacionRecepcionPaqueteFactura } from './definitions/TnsvalidacionRecepcionPaqueteFactura';
import { TnsvalidacionRecepcionPaqueteFacturaResponse } from './definitions/TnsvalidacionRecepcionPaqueteFacturaResponse';
import { TnsanulacionFactura } from './definitions/TnsanulacionFactura';
import { TnsanulacionFacturaResponse } from './definitions/TnsanulacionFacturaResponse';
import { ServicioFacturacion } from './services/ServicioFacturacion';
export interface Client extends SoapClient {
    ServicioFacturacion: ServicioFacturacion;
    recepcionPaqueteFacturaAsync(recepcionPaqueteFactura: TnsrecepcionPaqueteFactura): Promise<[
        result: TnsrecepcionPaqueteFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion): Promise<[
        result: TnsverificarComunicacionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    recepcionFacturaAsync(recepcionFactura: TnsrecepcionFactura): Promise<[
        result: TnsrecepcionFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    validacionRecepcionMasivaFacturaAsync(validacionRecepcionMasivaFactura: TnsvalidacionRecepcionMasivaFactura): Promise<[
        result: TnsvalidacionRecepcionMasivaFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    recepcionAnexosAsync(recepcionAnexos: TnsrecepcionAnexos): Promise<[
        result: TnsrecepcionAnexosResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    recepcionMasivaFacturaAsync(recepcionMasivaFactura: TnsrecepcionMasivaFactura): Promise<[
        result: TnsrecepcionMasivaFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    verificacionEstadoFacturaAsync(verificacionEstadoFactura: TnsverificacionEstadoFactura): Promise<[
        result: TnsverificacionEstadoFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    validacionRecepcionPaqueteFacturaAsync(validacionRecepcionPaqueteFactura: TnsvalidacionRecepcionPaqueteFactura): Promise<[
        result: TnsvalidacionRecepcionPaqueteFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    anulacionFacturaAsync(anulacionFactura: TnsanulacionFactura): Promise<[
        result: TnsanulacionFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
}
export declare function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<Client>;
