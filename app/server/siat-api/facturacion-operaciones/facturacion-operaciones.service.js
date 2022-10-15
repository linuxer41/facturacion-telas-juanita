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
exports.FacturacionOperacionesService = void 0;
const common_1 = require("@nestjs/common");
let FacturacionOperacionesService = class FacturacionOperacionesService {
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
        const client = this.getClient(credential, solicitud);
        const result = await client.verificarComunicacionAsync({});
        return result[0].return;
    }
    async registroPuntoVenta(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.registroPuntoVentaAsync({
            SolicitudRegistroPuntoVenta: solicitud,
        });
        return result[0].RespuestaRegistroPuntoVenta;
    }
    async registroPuntoVentaComisionista(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.registroPuntoVentaComisionistaAsync({
            SolicitudPuntoVentaComisionista: solicitud,
        });
        return result[0].RespuestaPuntoVentaComisionista;
    }
    async cierreOperacionesSistema(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.cierreOperacionesSistemaAsync({
            SolicitudOperaciones: solicitud,
        });
        return result[0].RespuestaCierreSistemas;
    }
    async consultaEventoSignificativo(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.consultaEventoSignificativoAsync({
            SolicitudConsultaEvento: solicitud,
        });
        return result[0].RespuestaListaEventos;
    }
    async consultaPuntoVenta(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.consultaPuntoVentaAsync({
            SolicitudConsultaPuntoVenta: solicitud,
        });
        return result[0].RespuestaConsultaPuntoVenta;
    }
    async registroEventoSignificativo(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.registroEventoSignificativoAsync({
            SolicitudEventoSignificativo: solicitud,
        });
        return result[0].RespuestaListaEventos;
    }
    async cierrePuntoVenta(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.cierrePuntoVentaAsync({
            SolicitudCierrePuntoVenta: solicitud,
        });
        return result[0].RespuestaCierrePuntoVenta;
    }
};
FacturacionOperacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FacturacionOperacionesService')),
    __param(1, (0, common_1.Inject)('FacturacionOperacionesServiceTest')),
    __metadata("design:paramtypes", [Object, Object])
], FacturacionOperacionesService);
exports.FacturacionOperacionesService = FacturacionOperacionesService;
//# sourceMappingURL=facturacion-operaciones.service.js.map