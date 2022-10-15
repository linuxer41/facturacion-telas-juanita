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
exports.FacturacionOperacionesController = void 0;
const common_1 = require("@nestjs/common");
const global_decorator_1 = require("../../decorators/global.decorator");
const facturacion_operaciones_service_1 = require("./facturacion-operaciones.service");
const RespuestaCierrePuntoVenta_dto_1 = require("./dto/RespuestaCierrePuntoVenta.dto");
const RespuestaCierreSistemas_dto_1 = require("./dto/RespuestaCierreSistemas.dto");
const RespuestaConsultaPuntoVenta_dto_1 = require("./dto/RespuestaConsultaPuntoVenta.dto");
const RespuestaListaEventos_dto_1 = require("./dto/RespuestaListaEventos.dto");
const RespuestaPuntoVentaComisionista_dto_1 = require("./dto/RespuestaPuntoVentaComisionista.dto");
const RespuestaRegistroPuntoVenta_dto_1 = require("./dto/RespuestaRegistroPuntoVenta.dto");
const SolicitudCierrePuntoVenta_dto_1 = require("./dto/SolicitudCierrePuntoVenta.dto");
const SolicitudConsultaEvento_dto_1 = require("./dto/SolicitudConsultaEvento.dto");
const SolicitudConsultaPuntoVenta_dto_1 = require("./dto/SolicitudConsultaPuntoVenta.dto");
const SolicitudEventoSignificativo_dto_1 = require("./dto/SolicitudEventoSignificativo.dto");
const SolicitudOperaciones_dto_1 = require("./dto/SolicitudOperaciones.dto");
const SolicitudPuntoVentaComisionista_dto_1 = require("./dto/SolicitudPuntoVentaComisionista.dto");
const SolicitudRegistroPuntoVenta_dto_1 = require("./dto/SolicitudRegistroPuntoVenta.dto");
const swagger_1 = require("@nestjs/swagger");
const Return_dto_1 = require("./dto/Return.dto");
let FacturacionOperacionesController = class FacturacionOperacionesController {
    constructor(facturacionOperacionesService) {
        this.facturacionOperacionesService = facturacionOperacionesService;
    }
    async verificarComunicacion(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.verificarComunicacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async registroPuntoVenta(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.registroPuntoVenta(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async registroPuntoVentaComisionista(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.registroPuntoVentaComisionista(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async cierreOperacionesSistema(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.cierreOperacionesSistema(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async consultaEventoSignificativo(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.consultaEventoSignificativo(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async consultaPuntoVenta(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.consultaPuntoVenta(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async registroEventoSignificativo(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.registroEventoSignificativo(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async cierrePuntoVenta(credential, solicitud) {
        try {
            return await this.facturacionOperacionesService.cierrePuntoVenta(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('verificar-comunicacion'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: Return_dto_1.ReturnDTO,
        description: 'Verifica comunicacion con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        global_decorator_1.VerificarComunicacionDto]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "verificarComunicacion", null);
__decorate([
    (0, common_1.Post)('registro-punto-venta'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaRegistroPuntoVenta_dto_1.RespuestaRegistroPuntoVentaDTO,
        description: 'Registra un punto de venta',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudRegistroPuntoVenta_dto_1.SolicitudRegistroPuntoVentaDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "registroPuntoVenta", null);
__decorate([
    (0, common_1.Post)('registro-punto-venta-comisionista'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaPuntoVentaComisionista_dto_1.RespuestaPuntoVentaComisionistaDTO,
        description: 'Registra un punto de venta comisionista',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudPuntoVentaComisionista_dto_1.SolicitudPuntoVentaComisionistaDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "registroPuntoVentaComisionista", null);
__decorate([
    (0, common_1.Post)('cierre-operaciones-sistema'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaCierreSistemas_dto_1.RespuestaCierreSistemasDTO,
        description: 'Cierra las operaciones del sistema',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudOperaciones_dto_1.SolicitudOperacionesDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "cierreOperacionesSistema", null);
__decorate([
    (0, common_1.Post)('consulta-evento-significativo'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaEventos_dto_1.RespuestaListaEventosDTO,
        description: 'Consulta un evento significativo',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudConsultaEvento_dto_1.SolicitudConsultaEventoDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "consultaEventoSignificativo", null);
__decorate([
    (0, common_1.Post)('consulta-punto-venta'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaConsultaPuntoVenta_dto_1.RespuestaConsultaPuntoVentaDTO,
        description: 'Consulta un punto de venta',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudConsultaPuntoVenta_dto_1.SolicitudConsultaPuntoVentaDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "consultaPuntoVenta", null);
__decorate([
    (0, common_1.Post)('registro-evento-significativo'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaEventos_dto_1.RespuestaListaEventosDTO,
        description: 'Registra un evento significativo',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudEventoSignificativo_dto_1.SolicitudEventoSignificativoDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "registroEventoSignificativo", null);
__decorate([
    (0, common_1.Post)('cierre-punto-venta'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaCierrePuntoVenta_dto_1.RespuestaCierrePuntoVentaDTO,
        description: 'Cierra un punto de venta',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudCierrePuntoVenta_dto_1.SolicitudCierrePuntoVentaDTO]),
    __metadata("design:returntype", Promise)
], FacturacionOperacionesController.prototype, "cierrePuntoVenta", null);
FacturacionOperacionesController = __decorate([
    (0, global_decorator_1.CredentialApiHeaders)(),
    (0, swagger_1.ApiTags)('facturacion-operaciones'),
    (0, common_1.Controller)('facturacion-operaciones'),
    __metadata("design:paramtypes", [facturacion_operaciones_service_1.FacturacionOperacionesService])
], FacturacionOperacionesController);
exports.FacturacionOperacionesController = FacturacionOperacionesController;
//# sourceMappingURL=facturacion-operaciones.controller.js.map