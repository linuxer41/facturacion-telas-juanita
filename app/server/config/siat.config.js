"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('siat', () => ({
    facturacionSincronizacion: 'https://siatrest.impuestos.gob.bo/v2/FacturacionSincronizacion?wsdl',
    servicioRecepcionCompras: 'https://siatrest.impuestos.gob.bo/v2/ServicioRecepcionCompras?wsdl',
    facturacionOperaciones: 'https://siatrest.impuestos.gob.bo/v2/FacturacionOperaciones?wsdl',
    facturacionCodigos: 'https://siatrest.impuestos.gob.bo/v2/FacturacionCodigos?wsdl',
    servicioFacturacionDocumentoAjuste: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionDocumentoAjuste?wsdl',
    servicioFacturacionTelecomunicaciones: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionTelecomunicaciones?wsdl',
    servicioFacturacionHidrocarburos: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionHidrocarburos?wsdl',
    servicioFacturacionElectronica: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionElectronica?wsdl',
    servicioFacturacionComputarizada: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionComputarizada?wsdl',
    servicioFacturacionServicioBasico: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionServicioBasico?wsdl',
    servicioFacturacionEntidadFinanciera: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionEntidadFinanciera?wsdl',
    servicioFacturacionCompraVenta: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionCompraVenta?wsdl',
    servicioFacturacionBoletoAereo: 'https://siatrest.impuestos.gob.bo/v2/ServicioFacturacionBoletoAereo?wsdl',
    facturacionSincronizacionTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionSincronizacion?wsdl',
    servicioRecepcionComprasTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioRecepcionCompras?wsdl',
    facturacionOperacionesTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionOperaciones?wsdl',
    facturacionCodigosTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionCodigos?wsdl',
    servicioFacturacionDocumentoAjusteTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionDocumentoAjuste?wsdl',
    servicioFacturacionTelecomunicacionesTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionTelecomunicaciones?wsdl',
    servicioFacturacionHidrocarburosTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionHidrocarburos?wsdl',
    servicioFacturacionElectronicaTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionElectronica?wsdl',
    servicioFacturacionComputarizadaTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionComputarizada?wsdl',
    servicioFacturacionServicioBasicoTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionServicioBasico?wsdl',
    servicioFacturacionEntidadFinancieraTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionEntidadFinanciera?wsdl',
    servicioFacturacionCompraVentaTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionCompraVenta?wsdl',
    servicioFacturacionBoletoAereoTest: 'https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionBoletoAereo?wsdl',
}));
//# sourceMappingURL=siat.config.js.map