"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionCodigosModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_soap_1 = require("nestjs-soap");
const facturacion_codigos_controller_1 = require("./facturacion-codigos.controller");
const facturacion_codigos_service_1 = require("./facturacion-codigos.service");
let FacturacionCodigosModule = class FacturacionCodigosModule {
};
FacturacionCodigosModule = __decorate([
    (0, common_1.Module)({
        controllers: [facturacion_codigos_controller_1.FacturacionCodigosController],
        providers: [facturacion_codigos_service_1.FacturacionCodigosService],
        imports: [
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'FacturacionCodigosService',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.facturacionCodigos'),
                    clientName: 'FacturacionCodigosService',
                }),
            }),
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'FacturacionCodigosServiceTest',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.facturacionCodigosTest'),
                    clientName: 'FacturacionCodigosServiceTest',
                }),
            }),
        ],
    })
], FacturacionCodigosModule);
exports.FacturacionCodigosModule = FacturacionCodigosModule;
//# sourceMappingURL=facturacion-codigos.module.js.map