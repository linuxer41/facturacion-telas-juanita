import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from 'soap';
import { TnssincronizarParametricaMotivoAnulacion } from './definitions/TnssincronizarParametricaMotivoAnulacion';
import { TnssincronizarParametricaMotivoAnulacionResponse } from './definitions/TnssincronizarParametricaMotivoAnulacionResponse';
import { TnssincronizarActividades } from './definitions/TnssincronizarActividades';
import { TnssincronizarActividadesResponse } from './definitions/TnssincronizarActividadesResponse';
import { TnssincronizarFechaHora } from './definitions/TnssincronizarFechaHora';
import { TnssincronizarFechaHoraResponse } from './definitions/TnssincronizarFechaHoraResponse';
import { TnssincronizarListaLeyendasFactura } from './definitions/TnssincronizarListaLeyendasFactura';
import { TnssincronizarListaLeyendasFacturaResponse } from './definitions/TnssincronizarListaLeyendasFacturaResponse';
import { TnssincronizarParametricaTipoHabitacion } from './definitions/TnssincronizarParametricaTipoHabitacion';
import { TnssincronizarParametricaTipoHabitacionResponse } from './definitions/TnssincronizarParametricaTipoHabitacionResponse';
import { TnssincronizarListaActividadesDocumentoSector } from './definitions/TnssincronizarListaActividadesDocumentoSector';
import { TnssincronizarListaActividadesDocumentoSectorResponse } from './definitions/TnssincronizarListaActividadesDocumentoSectorResponse';
import { TnssincronizarParametricaTipoDocumentoIdentidad } from './definitions/TnssincronizarParametricaTipoDocumentoIdentidad';
import { TnssincronizarParametricaTipoDocumentoIdentidadResponse } from './definitions/TnssincronizarParametricaTipoDocumentoIdentidadResponse';
import { TnssincronizarParametricaUnidadMedida } from './definitions/TnssincronizarParametricaUnidadMedida';
import { TnssincronizarParametricaUnidadMedidaResponse } from './definitions/TnssincronizarParametricaUnidadMedidaResponse';
import { TnssincronizarParametricaTipoDocumentoSector } from './definitions/TnssincronizarParametricaTipoDocumentoSector';
import { TnssincronizarParametricaTipoDocumentoSectorResponse } from './definitions/TnssincronizarParametricaTipoDocumentoSectorResponse';
import { TnssincronizarParametricaTiposFactura } from './definitions/TnssincronizarParametricaTiposFactura';
import { TnssincronizarParametricaTiposFacturaResponse } from './definitions/TnssincronizarParametricaTiposFacturaResponse';
import { TnsverificarComunicacion } from './definitions/TnsverificarComunicacion';
import { TnsverificarComunicacionResponse } from './definitions/TnsverificarComunicacionResponse';
import { TnssincronizarListaMensajesServicios } from './definitions/TnssincronizarListaMensajesServicios';
import { TnssincronizarListaMensajesServiciosResponse } from './definitions/TnssincronizarListaMensajesServiciosResponse';
import { TnssincronizarParametricaTipoMetodoPago } from './definitions/TnssincronizarParametricaTipoMetodoPago';
import { TnssincronizarParametricaTipoMetodoPagoResponse } from './definitions/TnssincronizarParametricaTipoMetodoPagoResponse';
import { TnssincronizarParametricaEventosSignificativos } from './definitions/TnssincronizarParametricaEventosSignificativos';
import { TnssincronizarParametricaEventosSignificativosResponse } from './definitions/TnssincronizarParametricaEventosSignificativosResponse';
import { TnssincronizarParametricaTipoPuntoVenta } from './definitions/TnssincronizarParametricaTipoPuntoVenta';
import { TnssincronizarParametricaTipoPuntoVentaResponse } from './definitions/TnssincronizarParametricaTipoPuntoVentaResponse';
import { TnssincronizarListaProductosServicios } from './definitions/TnssincronizarListaProductosServicios';
import { TnssincronizarListaProductosServiciosResponse } from './definitions/TnssincronizarListaProductosServiciosResponse';
import { TnssincronizarParametricaTipoEmision } from './definitions/TnssincronizarParametricaTipoEmision';
import { TnssincronizarParametricaTipoEmisionResponse } from './definitions/TnssincronizarParametricaTipoEmisionResponse';
import { TnssincronizarParametricaPaisOrigen } from './definitions/TnssincronizarParametricaPaisOrigen';
import { TnssincronizarParametricaPaisOrigenResponse } from './definitions/TnssincronizarParametricaPaisOrigenResponse';
import { TnssincronizarParametricaTipoMoneda } from './definitions/TnssincronizarParametricaTipoMoneda';
import { TnssincronizarParametricaTipoMonedaResponse } from './definitions/TnssincronizarParametricaTipoMonedaResponse';
import { ServicioFacturacionSincronizacion } from './services/ServicioFacturacionSincronizacion';
export interface Client extends SoapClient {
    ServicioFacturacionSincronizacion: ServicioFacturacionSincronizacion;
    sincronizarParametricaMotivoAnulacionAsync(sincronizarParametricaMotivoAnulacion: TnssincronizarParametricaMotivoAnulacion): Promise<[
        result: TnssincronizarParametricaMotivoAnulacionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarActividadesAsync(sincronizarActividades: TnssincronizarActividades): Promise<[
        result: TnssincronizarActividadesResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarFechaHoraAsync(sincronizarFechaHora: TnssincronizarFechaHora): Promise<[
        result: TnssincronizarFechaHoraResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarListaLeyendasFacturaAsync(sincronizarListaLeyendasFactura: TnssincronizarListaLeyendasFactura): Promise<[
        result: TnssincronizarListaLeyendasFacturaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoHabitacionAsync(sincronizarParametricaTipoHabitacion: TnssincronizarParametricaTipoHabitacion): Promise<[
        result: TnssincronizarParametricaTipoHabitacionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarListaActividadesDocumentoSectorAsync(sincronizarListaActividadesDocumentoSector: TnssincronizarListaActividadesDocumentoSector): Promise<[
        result: TnssincronizarListaActividadesDocumentoSectorResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoDocumentoIdentidadAsync(sincronizarParametricaTipoDocumentoIdentidad: TnssincronizarParametricaTipoDocumentoIdentidad): Promise<[
        result: TnssincronizarParametricaTipoDocumentoIdentidadResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaUnidadMedidaAsync(sincronizarParametricaUnidadMedida: TnssincronizarParametricaUnidadMedida): Promise<[
        result: TnssincronizarParametricaUnidadMedidaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoDocumentoSectorAsync(sincronizarParametricaTipoDocumentoSector: TnssincronizarParametricaTipoDocumentoSector): Promise<[
        result: TnssincronizarParametricaTipoDocumentoSectorResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTiposFacturaAsync(sincronizarParametricaTiposFactura: TnssincronizarParametricaTiposFactura): Promise<[
        result: TnssincronizarParametricaTiposFacturaResponse,
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
    sincronizarListaMensajesServiciosAsync(sincronizarListaMensajesServicios: TnssincronizarListaMensajesServicios): Promise<[
        result: TnssincronizarListaMensajesServiciosResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoMetodoPagoAsync(sincronizarParametricaTipoMetodoPago: TnssincronizarParametricaTipoMetodoPago): Promise<[
        result: TnssincronizarParametricaTipoMetodoPagoResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaEventosSignificativosAsync(sincronizarParametricaEventosSignificativos: TnssincronizarParametricaEventosSignificativos): Promise<[
        result: TnssincronizarParametricaEventosSignificativosResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoPuntoVentaAsync(sincronizarParametricaTipoPuntoVenta: TnssincronizarParametricaTipoPuntoVenta): Promise<[
        result: TnssincronizarParametricaTipoPuntoVentaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarListaProductosServiciosAsync(sincronizarListaProductosServicios: TnssincronizarListaProductosServicios): Promise<[
        result: TnssincronizarListaProductosServiciosResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoEmisionAsync(sincronizarParametricaTipoEmision: TnssincronizarParametricaTipoEmision): Promise<[
        result: TnssincronizarParametricaTipoEmisionResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaPaisOrigenAsync(sincronizarParametricaPaisOrigen: TnssincronizarParametricaPaisOrigen): Promise<[
        result: TnssincronizarParametricaPaisOrigenResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
    sincronizarParametricaTipoMonedaAsync(sincronizarParametricaTipoMoneda: TnssincronizarParametricaTipoMoneda): Promise<[
        result: TnssincronizarParametricaTipoMonedaResponse,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
    ]>;
}
export declare function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<Client>;
