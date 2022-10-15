"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionSincronizacionModule = void 0;
const common_1 = require("@nestjs/common");
const facturacion_sincronizacion_service_1 = require("./facturacion-sincronizacion.service");
const facturacion_sincronizacion_controller_1 = require("./facturacion-sincronizacion.controller");
const config_1 = require("@nestjs/config");
const nestjs_soap_1 = require("nestjs-soap");
let FacturacionSincronizacionModule = class FacturacionSincronizacionModule {
};
FacturacionSincronizacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [facturacion_sincronizacion_controller_1.FacturacionSincronizacionController],
        providers: [facturacion_sincronizacion_service_1.FacturacionSincronizacionService],
        imports: [
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'FacturacionSincronizacionService',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.facturacionSincronizacion'),
                    clientName: 'FacturacionSincronizacionService',
                }),
            }),
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'FacturacionSincronizacionServiceTest',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.facturacionSincronizacionTest'),
                    clientName: 'FacturacionSincronizacionServiceTest',
                }),
            }),
            common_1.CacheModule.register(),
        ],
    })
], FacturacionSincronizacionModule);
exports.FacturacionSincronizacionModule = FacturacionSincronizacionModule;
//# sourceMappingURL=facturacion-sincronizacion.module.js.map