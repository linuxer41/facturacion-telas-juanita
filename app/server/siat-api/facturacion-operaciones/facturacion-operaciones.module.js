"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionOperacionesModule = void 0;
const common_1 = require("@nestjs/common");
const facturacion_operaciones_service_1 = require("./facturacion-operaciones.service");
const facturacion_operaciones_controller_1 = require("./facturacion-operaciones.controller");
const nestjs_soap_1 = require("nestjs-soap");
const config_1 = require("@nestjs/config");
let FacturacionOperacionesModule = class FacturacionOperacionesModule {
};
FacturacionOperacionesModule = __decorate([
    (0, common_1.Module)({
        controllers: [facturacion_operaciones_controller_1.FacturacionOperacionesController],
        providers: [facturacion_operaciones_service_1.FacturacionOperacionesService],
        imports: [
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'FacturacionOperacionesService',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.facturacionOperaciones'),
                    clientName: 'FacturacionOperacionesService',
                }),
            }),
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'FacturacionOperacionesServiceTest',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.facturacionOperacionesTest'),
                    clientName: 'FacturacionOperacionesServiceTest',
                }),
            }),
        ],
        exports: [facturacion_operaciones_service_1.FacturacionOperacionesService],
    })
], FacturacionOperacionesModule);
exports.FacturacionOperacionesModule = FacturacionOperacionesModule;
//# sourceMappingURL=facturacion-operaciones.module.js.map