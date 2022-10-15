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
exports.FacturacionCodigosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const global_decorator_1 = require("../../decorators/global.decorator");
const RespuestaComunicacion_dto_1 = require("./dto/RespuestaComunicacion.dto");
const RespuestaCufd_dto_1 = require("./dto/RespuestaCufd.dto");
const RespuestaCufdMasivo_dto_1 = require("./dto/RespuestaCufdMasivo.dto");
const RespuestaCuis_dto_1 = require("./dto/RespuestaCuis.dto");
const RespuestaCuisMasivo_dto_1 = require("./dto/RespuestaCuisMasivo.dto");
const SolicitudCufd_dto_1 = require("./dto/SolicitudCufd.dto");
const SolicitudCufdMasivo_dto_1 = require("./dto/SolicitudCufdMasivo.dto");
const SolicitudCuis_dto_1 = require("./dto/SolicitudCuis.dto");
const SolicitudCuisMasivoSistemas_dto_1 = require("./dto/SolicitudCuisMasivoSistemas.dto");
const SolicitudNotificaRevocado_dto_1 = require("./dto/SolicitudNotificaRevocado.dto");
const SolicitudVerificarNit_dto_1 = require("./dto/SolicitudVerificarNit.dto");
const facturacion_codigos_service_1 = require("./facturacion-codigos.service");
let FacturacionCodigosController = class FacturacionCodigosController {
    constructor(facturacionCodigosService) {
        this.facturacionCodigosService = facturacionCodigosService;
    }
    async verificarComunicacion(credential, solicitud) {
        try {
            return await this.facturacionCodigosService.verificarComunicacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async verificarNit(credential, solicitud) {
        try {
            return await this.facturacionCodigosService.verificarNit(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async cuisMasivo(credential, solicitud) {
        try {
            return await this.facturacionCodigosService.cuisMasivo(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async cufd(credential, solicitud) {
        try {
            return await this.facturacionCodigosService.cufd(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async notificaCertificadoRevocado(credential, solicitud) {
        try {
            return await this.facturacionCodigosService.notificaCertificadoRevocado(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async cuis(solicitud, credential) {
        try {
            return await this.facturacionCodigosService.cuis(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async cufdMasivo(credential, solicitud) {
        try {
            return await this.facturacionCodigosService.cufdMasivo(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('verificarComunicacion'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaComunicacion_dto_1.RespuestaComunicacionDTO,
        description: 'Verifica comunicacion con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        global_decorator_1.VerificarComunicacionDto]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "verificarComunicacion", null);
__decorate([
    (0, common_1.Post)('verificarNit'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaComunicacion_dto_1.RespuestaComunicacionDTO,
        description: 'Verifica nit con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudVerificarNit_dto_1.SolicitudVerificarNitDTO]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "verificarNit", null);
__decorate([
    (0, common_1.Post)('cuisMasivo'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaCuisMasivo_dto_1.RespuestaCuisMasivoDTO,
        description: 'Verifica cuis masivo con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudCuisMasivoSistemas_dto_1.SolicitudCuisMasivoSistemasDTO]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "cuisMasivo", null);
__decorate([
    (0, common_1.Post)('cufd'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaCufd_dto_1.RespuestaCufdDTO,
        description: 'Verifica cufd con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudCufd_dto_1.SolicitudCufdDTO]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "cufd", null);
__decorate([
    (0, common_1.Post)('notificaCertificadoRevocado'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaComunicacion_dto_1.RespuestaComunicacionDTO,
        description: 'Notifica certificado revocado con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudNotificaRevocado_dto_1.SolicitudNotificaRevocadoDTO]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "notificaCertificadoRevocado", null);
__decorate([
    (0, common_1.Post)('cuis'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaCuis_dto_1.RespuestaCuisDTO,
        description: 'Verifica cuis con el servicio de impuestos nacionales',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, global_decorator_1.AppCredential)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SolicitudCuis_dto_1.SolicitudCuisDTO,
        global_decorator_1.AppCrediantialDto]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "cuis", null);
__decorate([
    (0, common_1.Post)('cufdMasivo'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaCufdMasivo_dto_1.RespuestaCufdMasivoDTO,
        description: 'Verifica cufd masivo con el servicio de impuestos nacionales',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudCufdMasivo_dto_1.SolicitudCufdMasivoDTO]),
    __metadata("design:returntype", Promise)
], FacturacionCodigosController.prototype, "cufdMasivo", null);
FacturacionCodigosController = __decorate([
    (0, global_decorator_1.CredentialApiHeaders)(),
    (0, swagger_1.ApiTags)('facturacion-codigos'),
    (0, common_1.Controller)('facturacion-codigos'),
    __metadata("design:paramtypes", [facturacion_codigos_service_1.FacturacionCodigosService])
], FacturacionCodigosController);
exports.FacturacionCodigosController = FacturacionCodigosController;
//# sourceMappingURL=facturacion-codigos.controller.js.map