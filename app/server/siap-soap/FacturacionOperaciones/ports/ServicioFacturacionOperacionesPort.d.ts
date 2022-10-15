import { TnsverificarComunicacion } from '../definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from '../definitions/TnsverificarComunicacionResponse';
import { TnsregistroPuntoVenta } from '../definitions/TnsregistroPuntoVenta';
import { TnsregistroPuntoVentaResponse } from '../definitions/TnsregistroPuntoVentaResponse';
import { TnsregistroPuntoVentaComisionista } from '../definitions/TnsregistroPuntoVentaComisionista';
import { TnsregistroPuntoVentaComisionistaResponse } from '../definitions/TnsregistroPuntoVentaComisionistaResponse';
import { TnscierreOperacionesSistema } from '../definitions/TnscierreOperacionesSistema';
import { TnscierreOperacionesSistemaResponse } from '../definitions/TnscierreOperacionesSistemaResponse';
import { TnsconsultaEventoSignificativo } from '../definitions/TnsconsultaEventoSignificativo';
import { TnsconsultaEventoSignificativoResponse } from '../definitions/TnsconsultaEventoSignificativoResponse';
import { TnsconsultaPuntoVenta } from '../definitions/TnsconsultaPuntoVenta';
import { TnsconsultaPuntoVentaResponse } from '../definitions/TnsconsultaPuntoVentaResponse';
import { TnsregistroEventoSignificativo } from '../definitions/TnsregistroEventoSignificativo';
import { TnsregistroEventoSignificativoResponse } from '../definitions/TnsregistroEventoSignificativoResponse';
import { TnscierrePuntoVenta } from '../definitions/TnscierrePuntoVenta';
import { TnscierrePuntoVentaResponse } from '../definitions/TnscierrePuntoVentaResponse';
export interface ServicioFacturacionOperacionesPort {
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registroPuntoVenta(registroPuntoVenta: TnsregistroPuntoVenta, callback: (err: any, result: TnsregistroPuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registroPuntoVentaComisionista(registroPuntoVentaComisionista: TnsregistroPuntoVentaComisionista, callback: (err: any, result: TnsregistroPuntoVentaComisionistaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cierreOperacionesSistema(cierreOperacionesSistema: TnscierreOperacionesSistema, callback: (err: any, result: TnscierreOperacionesSistemaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    consultaEventoSignificativo(consultaEventoSignificativo: TnsconsultaEventoSignificativo, callback: (err: any, result: TnsconsultaEventoSignificativoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    consultaPuntoVenta(consultaPuntoVenta: TnsconsultaPuntoVenta, callback: (err: any, result: TnsconsultaPuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registroEventoSignificativo(registroEventoSignificativo: TnsregistroEventoSignificativo, callback: (err: any, result: TnsregistroEventoSignificativoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cierrePuntoVenta(cierrePuntoVenta: TnscierrePuntoVenta, callback: (err: any, result: TnscierrePuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
