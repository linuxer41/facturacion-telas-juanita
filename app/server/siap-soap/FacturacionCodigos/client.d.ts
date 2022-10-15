import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from 'soap';
import { TnsverificarComunicacion } from './definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from './definitions/TnsverificarComunicacionResponse';
import { TnsverificarNit } from './definitions/TnsverificarNit';
import { TnsverificarNitResponse } from './definitions/TnsverificarNitResponse';
import { TnscuisMasivo } from './definitions/TnscuisMasivo';
import { TnscuisMasivoResponse } from './definitions/TnscuisMasivoResponse';
import { Tnscufd } from './definitions/Tnscufd';
import { TnscufdResponse } from './definitions/TnscufdResponse';
import { TnsnotificaCertificadoRevocado } from './definitions/TnsnotificaCertificadoRevocado';
import { TnsnotificaCertificadoRevocadoResponse } from './definitions/TnsnotificaCertificadoRevocadoResponse';
import { Tnscuis } from './definitions/Tnscuis';
import { TnscuisResponse } from './definitions/TnscuisResponse';
import { TnscufdMasivo } from './definitions/TnscufdMasivo';
import { TnscufdMasivoResponse } from './definitions/TnscufdMasivoResponse';
import { ServicioFacturacionCodigos } from './services/ServicioFacturacionCodigos';
export interface Client extends SoapClient {
    ServicioFacturacionCodigos: ServicioFacturacionCodigos;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion): Promise<[
        result: TnsverificarComunicacionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    verificarNitAsync(verificarNit: TnsverificarNit): Promise<[
        result: TnsverificarNitResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    cuisMasivoAsync(cuisMasivo: TnscuisMasivo): Promise<[
        result: TnscuisMasivoResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    cufdAsync(cufd: Tnscufd): Promise<[
        result: TnscufdResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    notificaCertificadoRevocadoAsync(notificaCertificadoRevocado: TnsnotificaCertificadoRevocado): Promise<[
        result: TnsnotificaCertificadoRevocadoResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    cuisAsync(cuis: Tnscuis): Promise<[
        result: TnscuisResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    cufdMasivoAsync(cufdMasivo: TnscufdMasivo): Promise<[
        result: TnscufdMasivoResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
}
export declare function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<Client>;
