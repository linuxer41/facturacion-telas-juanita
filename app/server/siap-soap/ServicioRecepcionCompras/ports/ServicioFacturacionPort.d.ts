import { TnsverificarComunicacion } from '../definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from '../definitions/TnsverificarComunicacionResponse';
import { TnsvalidacionRecepcionPaqueteCompras } from '../definitions/TnsvalidacionRecepcionPaqueteCompras';
import { TnsvalidacionRecepcionPaqueteComprasResponse } from '../definitions/TnsvalidacionRecepcionPaqueteComprasResponse';
import { TnsrecepcionPaqueteCompras } from '../definitions/TnsrecepcionPaqueteCompras';
import { TnsrecepcionPaqueteComprasResponse } from '../definitions/TnsrecepcionPaqueteComprasResponse';
import { TnsanulacionCompra } from '../definitions/TnsanulacionCompra';
import { TnsanulacionCompraResponse } from '../definitions/TnsanulacionCompraResponse';
import { TnsconfirmacionCompras } from '../definitions/TnsconfirmacionCompras';
import { TnsconfirmacionComprasResponse } from '../definitions/TnsconfirmacionComprasResponse';
import { TnsconsultaCompras } from '../definitions/TnsconsultaCompras';
import { TnsconsultaComprasResponse } from '../definitions/TnsconsultaComprasResponse';
export interface ServicioFacturacionPort {
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validacionRecepcionPaqueteCompras(validacionRecepcionPaqueteCompras: TnsvalidacionRecepcionPaqueteCompras, callback: (err: any, result: TnsvalidacionRecepcionPaqueteComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionPaqueteCompras(recepcionPaqueteCompras: TnsrecepcionPaqueteCompras, callback: (err: any, result: TnsrecepcionPaqueteComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    anulacionCompra(anulacionCompra: TnsanulacionCompra, callback: (err: any, result: TnsanulacionCompraResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    confirmacionCompras(confirmacionCompras: TnsconfirmacionCompras, callback: (err: any, result: TnsconfirmacionComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    consultaCompras(consultaCompras: TnsconsultaCompras, callback: (err: any, result: TnsconsultaComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
