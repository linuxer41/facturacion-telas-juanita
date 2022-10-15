import { TnsverificarComunicacion } from '../definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from '../definitions/TnsverificarComunicacionResponse';
import { TnsverificarNit } from '../definitions/TnsverificarNit';
import { TnsverificarNitResponse } from '../definitions/TnsverificarNitResponse';
import { TnscuisMasivo } from '../definitions/TnscuisMasivo';
import { TnscuisMasivoResponse } from '../definitions/TnscuisMasivoResponse';
import { Tnscufd } from '../definitions/Tnscufd';
import { TnscufdResponse } from '../definitions/TnscufdResponse';
import { TnsnotificaCertificadoRevocado } from '../definitions/TnsnotificaCertificadoRevocado';
import { TnsnotificaCertificadoRevocadoResponse } from '../definitions/TnsnotificaCertificadoRevocadoResponse';
import { Tnscuis } from '../definitions/Tnscuis';
import { TnscuisResponse } from '../definitions/TnscuisResponse';
import { TnscufdMasivo } from '../definitions/TnscufdMasivo';
import { TnscufdMasivoResponse } from '../definitions/TnscufdMasivoResponse';
export interface ServicioFacturacionCodigosPort {
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificarNit(verificarNit: TnsverificarNit, callback: (err: any, result: TnsverificarNitResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cuisMasivo(cuisMasivo: TnscuisMasivo, callback: (err: any, result: TnscuisMasivoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cufd(cufd: Tnscufd, callback: (err: any, result: TnscufdResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    notificaCertificadoRevocado(notificaCertificadoRevocado: TnsnotificaCertificadoRevocado, callback: (err: any, result: TnsnotificaCertificadoRevocadoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cuis(cuis: Tnscuis, callback: (err: any, result: TnscuisResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cufdMasivo(cufdMasivo: TnscufdMasivo, callback: (err: any, result: TnscufdMasivoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
