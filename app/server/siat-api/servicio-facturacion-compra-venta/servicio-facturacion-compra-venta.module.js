"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioFacturacionCompraVentaModule = void 0;
const common_1 = require("@nestjs/common");
const servicio_facturacion_compra_venta_service_1 = require("./servicio-facturacion-compra-venta.service");
const servicio_facturacion_compra_venta_controller_1 = require("./servicio-facturacion-compra-venta.controller");
const nestjs_soap_1 = require("nestjs-soap");
const config_1 = require("@nestjs/config");
let ServicioFacturacionCompraVentaModule = class ServicioFacturacionCompraVentaModule {
};
ServicioFacturacionCompraVentaModule = __decorate([
    (0, common_1.Module)({
        controllers: [servicio_facturacion_compra_venta_controller_1.ServicioFacturacionCompraVentaController],
        providers: [servicio_facturacion_compra_venta_service_1.ServicioFacturacionCompraVentaService],
        imports: [
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'ServicioFacturacionCompraVentaService',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.servicioFacturacionCompraVenta'),
                    clientName: 'ServicioFacturacionCompraVentaService',
                }),
            }),
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'ServicioFacturacionCompraVentaServiceTest',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.servicioFacturacionCompraVentaTest'),
                    clientName: 'ServicioFacturacionCompraVentaServiceTest',
                }),
            }),
        ],
        exports: [servicio_facturacion_compra_venta_service_1.ServicioFacturacionCompraVentaService],
    })
], ServicioFacturacionCompraVentaModule);
exports.ServicioFacturacionCompraVentaModule = ServicioFacturacionCompraVentaModule;
//# sourceMappingURL=servicio-facturacion-compra-venta.module.js.map