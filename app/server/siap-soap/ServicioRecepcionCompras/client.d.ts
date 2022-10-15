import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from 'soap';
import { TnsverificarComunicacion } from './definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from './definitions/TnsverificarComunicacionResponse';
import { TnsvalidacionRecepcionPaqueteCompras } from './definitions/TnsvalidacionRecepcionPaqueteCompras';
import { TnsvalidacionRecepcionPaqueteComprasResponse } from './definitions/TnsvalidacionRecepcionPaqueteComprasResponse';
import { TnsrecepcionPaqueteCompras } from './definitions/TnsrecepcionPaqueteCompras';
import { TnsrecepcionPaqueteComprasResponse } from './definitions/TnsrecepcionPaqueteComprasResponse';
import { TnsanulacionCompra } from './definitions/TnsanulacionCompra';
import { TnsanulacionCompraResponse } from './definitions/TnsanulacionCompraResponse';
import { TnsconfirmacionCompras } from './definitions/TnsconfirmacionCompras';
import { TnsconfirmacionComprasResponse } from './definitions/TnsconfirmacionComprasResponse';
import { TnsconsultaCompras } from './definitions/TnsconsultaCompras';
import { TnsconsultaComprasResponse } from './definitions/TnsconsultaComprasResponse';
import { ServicioRecepcionCompras } from './services/ServicioRecepcionCompras';
export interface Client extends SoapClient {
    ServicioRecepcionCompras: ServicioRecepcionCompras;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion): Promise<[
        result: TnsverificarComunicacionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    validacionRecepcionPaqueteComprasAsync(validacionRecepcionPaqueteCompras: TnsvalidacionRecepcionPaqueteCompras): Promise<[
        result: TnsvalidacionRecepcionPaqueteComprasResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    recepcionPaqueteComprasAsync(recepcionPaqueteCompras: TnsrecepcionPaqueteCompras): Promise<[
        result: TnsrecepcionPaqueteComprasResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    anulacionCompraAsync(anulacionCompra: TnsanulacionCompra): Promise<[
        result: TnsanulacionCompraResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    confirmacionComprasAsync(confirmacionCompras: TnsconfirmacionCompras): Promise<[
        result: TnsconfirmacionComprasResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    consultaComprasAsync(consultaCompras: TnsconsultaCompras): Promise<[
        result: TnsconsultaComprasResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
}
export declare function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<Client>;
