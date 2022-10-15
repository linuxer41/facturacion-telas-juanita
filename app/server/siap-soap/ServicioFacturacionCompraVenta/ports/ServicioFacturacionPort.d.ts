import { TnsrecepcionPaqueteFactura } from '../definitions/TnsrecepcionPaqueteFactura';
import { TnsrecepcionPaqueteFacturaResponse } from '../definitions/TnsrecepcionPaqueteFacturaResponse';
import { TnsverificarComunicacion } from '../definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from '../definitions/TnsverificarComunicacionResponse';
import { TnsrecepcionFactura } from '../definitions/TnsrecepcionFactura';
import { TnsrecepcionFacturaResponse } from '../definitions/TnsrecepcionFacturaResponse';
import { TnsvalidacionRecepcionMasivaFactura } from '../definitions/TnsvalidacionRecepcionMasivaFactura';
import { TnsvalidacionRecepcionMasivaFacturaResponse } from '../definitions/TnsvalidacionRecepcionMasivaFacturaResponse';
import { TnsrecepcionAnexos } from '../definitions/TnsrecepcionAnexos';
import { TnsrecepcionAnexosResponse } from '../definitions/TnsrecepcionAnexosResponse';
import { TnsrecepcionMasivaFactura } from '../definitions/TnsrecepcionMasivaFactura';
import { TnsrecepcionMasivaFacturaResponse } from '../definitions/TnsrecepcionMasivaFacturaResponse';
import { TnsverificacionEstadoFactura } from '../definitions/TnsverificacionEstadoFactura';
import { TnsverificacionEstadoFacturaResponse } from '../definitions/TnsverificacionEstadoFacturaResponse';
import { TnsvalidacionRecepcionPaqueteFactura } from '../definitions/TnsvalidacionRecepcionPaqueteFactura';
import { TnsvalidacionRecepcionPaqueteFacturaResponse } from '../definitions/TnsvalidacionRecepcionPaqueteFacturaResponse';
import { TnsanulacionFactura } from '../definitions/TnsanulacionFactura';
import { TnsanulacionFacturaResponse } from '../definitions/TnsanulacionFacturaResponse';
export interface ServicioFacturacionPort {
    recepcionPaqueteFactura(recepcionPaqueteFactura: TnsrecepcionPaqueteFactura, callback: (err: any, result: TnsrecepcionPaqueteFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionFactura(recepcionFactura: TnsrecepcionFactura, callback: (err: any, result: TnsrecepcionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validacionRecepcionMasivaFactura(validacionRecepcionMasivaFactura: TnsvalidacionRecepcionMasivaFactura, callback: (err: any, result: TnsvalidacionRecepcionMasivaFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionAnexos(recepcionAnexos: TnsrecepcionAnexos, callback: (err: any, result: TnsrecepcionAnexosResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionMasivaFactura(recepcionMasivaFactura: TnsrecepcionMasivaFactura, callback: (err: any, result: TnsrecepcionMasivaFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificacionEstadoFactura(verificacionEstadoFactura: TnsverificacionEstadoFactura, callback: (err: any, result: TnsverificacionEstadoFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validacionRecepcionPaqueteFactura(validacionRecepcionPaqueteFactura: TnsvalidacionRecepcionPaqueteFactura, callback: (err: any, result: TnsvalidacionRecepcionPaqueteFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    anulacionFactura(anulacionFactura: TnsanulacionFactura, callback: (err: any, result: TnsanulacionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
