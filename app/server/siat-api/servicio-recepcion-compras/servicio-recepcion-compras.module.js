"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRecepcionComprasModule = void 0;
const common_1 = require("@nestjs/common");
const servicio_recepcion_compras_service_1 = require("./servicio-recepcion-compras.service");
const servicio_recepcion_compras_controller_1 = require("./servicio-recepcion-compras.controller");
const nestjs_soap_1 = require("nestjs-soap");
const config_1 = require("@nestjs/config");
let ServicioRecepcionComprasModule = class ServicioRecepcionComprasModule {
};
ServicioRecepcionComprasModule = __decorate([
    (0, common_1.Module)({
        controllers: [servicio_recepcion_compras_controller_1.ServicioRecepcionComprasController],
        providers: [servicio_recepcion_compras_service_1.ServicioRecepcionComprasService],
        imports: [
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'ServicioRecepcionComprasService',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.servicioRecepcionCompras'),
                    clientName: 'ServicioRecepcionComprasService',
                }),
            }),
            nestjs_soap_1.SoapModule.forRootAsync({
                clientName: 'ServicioRecepcionComprasServiceTest',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('siat.servicioRecepcionComprasTest'),
                    clientName: 'ServicioRecepcionComprasServiceTest',
                }),
            }),
        ],
    })
], ServicioRecepcionComprasModule);
exports.ServicioRecepcionComprasModule = ServicioRecepcionComprasModule;
//# sourceMappingURL=servicio-recepcion-compras.module.js.map