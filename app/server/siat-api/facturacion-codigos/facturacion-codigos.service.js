"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionCodigosService = void 0;
const common_1 = require("@nestjs/common");
let FacturacionCodigosService = class FacturacionCodigosService {
    constructor(soapClient, soapClientTest) {
        this.soapClient = soapClient;
        this.soapClientTest = soapClientTest;
    }
    getClient(credential, solicitud) {
        if (Number(solicitud.codigoAmbiente) === 2) {
            if (!this.soapClientTest) {
                throw new common_1.HttpException('No se conectar al servicio de SIAT', common_1.HttpStatus.BAD_REQUEST);
            }
            this.soapClientTest.addHttpHeader('apikey', 'TokenApi ' + credential.siatApiKey);
            return this.soapClientTest;
        }
        if (!this.soapClient) {
            throw new common_1.HttpException('No se conectar al servicio de SIAT', common_1.HttpStatus.BAD_REQUEST);
        }
        this.soapClient.addHttpHeader('apikey', 'TokenApi ' + credential.siatApiKey);
        return this.soapClient;
    }
    async verificarComunicacion(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.verificarComunicacionAsync({});
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaComunicacion;
    }
    async verificarNit(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.verificarNitAsync({
            SolicitudVerificarNit: solicitud,
        });
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaVerificarNit;
    }
    async cuisMasivo(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.cuisMasivoAsync({
            SolicitudCuisMasivoSistemas: solicitud,
        });
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaCuisMasivo;
    }
    async cufd(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.cufdAsync({
            SolicitudCufd: solicitud,
        });
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaCufd;
    }
    async notificaCertificadoRevocado(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.notificaCertificadoRevocadoAsync({
            SolicitudNotificaRevocado: solicitud,
        });
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaNotificaRevocado;
    }
    async cuis(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.cuisAsync({
            SolicitudCuis: solicitud,
        });
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaCuis;
    }
    async cufdMasivo(credential, solicitud) {
        var _a;
        const client = this.getClient(credential, solicitud);
        const result = await client.cufdMasivoAsync({
            SolicitudCufdMasivo: solicitud,
        });
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.RespuestaCufdMasivo;
    }
};
FacturacionCodigosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FacturacionCodigosService')),
    __param(1, (0, common_1.Inject)('FacturacionCodigosServiceTest')),
    __metadata("design:paramtypes", [Object, Object])
], FacturacionCodigosService);
exports.FacturacionCodigosService = FacturacionCodigosService;
//# sourceMappingURL=facturacion-codigos.service.js.map