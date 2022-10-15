import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from 'soap';
import { TnsverificarComunicacion } from './definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from './definitions/TnsverificarComunicacionResponse';
import { TnsregistroPuntoVenta } from './definitions/TnsregistroPuntoVenta';
import { TnsregistroPuntoVentaResponse } from './definitions/TnsregistroPuntoVentaResponse';
import { TnsregistroPuntoVentaComisionista } from './definitions/TnsregistroPuntoVentaComisionista';
import { TnsregistroPuntoVentaComisionistaResponse } from './definitions/TnsregistroPuntoVentaComisionistaResponse';
import { TnscierreOperacionesSistema } from './definitions/TnscierreOperacionesSistema';
import { TnscierreOperacionesSistemaResponse } from './definitions/TnscierreOperacionesSistemaResponse';
import { TnsconsultaEventoSignificativo } from './definitions/TnsconsultaEventoSignificativo';
import { TnsconsultaEventoSignificativoResponse } from './definitions/TnsconsultaEventoSignificativoResponse';
import { TnsconsultaPuntoVenta } from './definitions/TnsconsultaPuntoVenta';
import { TnsconsultaPuntoVentaResponse } from './definitions/TnsconsultaPuntoVentaResponse';
import { TnsregistroEventoSignificativo } from './definitions/TnsregistroEventoSignificativo';
import { TnsregistroEventoSignificativoResponse } from './definitions/TnsregistroEventoSignificativoResponse';
import { TnscierrePuntoVenta } from './definitions/TnscierrePuntoVenta';
import { TnscierrePuntoVentaResponse } from './definitions/TnscierrePuntoVentaResponse';
import { ServicioFacturacionOperaciones } from './services/ServicioFacturacionOperaciones';
export interface Client extends SoapClient {
    ServicioFacturacionOperaciones: ServicioFacturacionOperaciones;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion): Promise<[
        result: TnsverificarComunicacionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    registroPuntoVentaAsync(registroPuntoVenta: TnsregistroPuntoVenta): Promise<[
        result: TnsregistroPuntoVentaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    registroPuntoVentaComisionistaAsync(registroPuntoVentaComisionista: TnsregistroPuntoVentaComisionista): Promise<[
        result: TnsregistroPuntoVentaComisionistaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    cierreOperacionesSistemaAsync(cierreOperacionesSistema: TnscierreOperacionesSistema): Promise<[
        result: TnscierreOperacionesSistemaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    consultaEventoSignificativoAsync(consultaEventoSignificativo: TnsconsultaEventoSignificativo): Promise<[
        result: TnsconsultaEventoSignificativoResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    consultaPuntoVentaAsync(consultaPuntoVenta: TnsconsultaPuntoVenta): Promise<[
        result: TnsconsultaPuntoVentaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    registroEventoSignificativoAsync(registroEventoSignificativo: TnsregistroEventoSignificativo): Promise<[
        result: TnsregistroEventoSignificativoResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    cierrePuntoVentaAsync(cierrePuntoVenta: TnscierrePuntoVenta): Promise<[
        result: TnscierrePuntoVentaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
}
export declare function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<Client>;
