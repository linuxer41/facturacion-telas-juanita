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
exports.PrepararFacturaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const global_decorator_1 = require("../../decorators/global.decorator");
const FacturaCompraVenta_dto_1 = require("./dto/FacturaCompraVenta.dto");
const FacturaCompraVentaRespuesta_dto_1 = require("./dto/FacturaCompraVentaRespuesta.dto");
const SolicitudAnularEmailFactura_dto_1 = require("./dto/SolicitudAnularEmailFactura.dto");
const SolicitudEnviarEmailFactura_1 = require("./dto/SolicitudEnviarEmailFactura");
const SolicitudValidarPaqueteFactura_1 = require("./dto/SolicitudValidarPaqueteFactura");
const preparar_factura_service_1 = require("./preparar-factura.service");
let PrepararFacturaController = class PrepararFacturaController {
    constructor(prepararFacturaService) {
        this.prepararFacturaService = prepararFacturaService;
    }
    async facturaCompraVenta(data) {
        try {
            return await this.prepararFacturaService.facturaCompraVenta(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async validarPaquete(credential, data) {
        try {
            return await this.prepararFacturaService.validarContingencia(credential, data);
        }
        catch (error) {
            console.log({ error });
            throw new common_1.BadRequestException(error.message);
        }
    }
    async enviarEmailFactura(data) {
        try {
            return await this.prepararFacturaService.enviarEmailFactura(data);
        }
        catch (error) {
            console.log({ error });
            throw new common_1.BadRequestException(error.message);
        }
    }
    async anularEmailFactura(data) {
        try {
            return await this.prepararFacturaService.anularEmailFactura(data);
        }
        catch (error) {
            console.log({ error });
            throw new common_1.BadRequestException(error.message);
        }
    }
    async facturasPendientes() {
        try {
            return await this.prepararFacturaService.facturasPendientes();
        }
        catch (error) {
            console.log({ error });
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('facturaCompraVenta'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: FacturaCompraVentaRespuesta_dto_1.FacturaCompraVentaRespuestaDTO,
        description: 'Texto de factura electronica xml',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FacturaCompraVenta_dto_1.FacturaCompraVentaDTO]),
    __metadata("design:returntype", Promise)
], PrepararFacturaController.prototype, "facturaCompraVenta", null);
__decorate([
    (0, common_1.Post)('validarPaquete'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: FacturaCompraVentaRespuesta_dto_1.FacturaCompraVentaRespuestaDTO,
        description: 'Texto de factura electronica xml',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudValidarPaqueteFactura_1.SolicitudValidarPaqueteFactura]),
    __metadata("design:returntype", Promise)
], PrepararFacturaController.prototype, "validarPaquete", null);
__decorate([
    (0, common_1.Post)('enviarEmailFactura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: FacturaCompraVentaRespuesta_dto_1.FacturaCompraVentaRespuestaDTO,
        description: 'Texto de factura electronica xml',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SolicitudEnviarEmailFactura_1.SolicitudEnviarEmailFacturaDTO]),
    __metadata("design:returntype", Promise)
], PrepararFacturaController.prototype, "enviarEmailFactura", null);
__decorate([
    (0, common_1.Post)('anularEmailFactura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: FacturaCompraVentaRespuesta_dto_1.FacturaCompraVentaRespuestaDTO,
        description: 'Texto de factura electronica xml',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SolicitudAnularEmailFactura_dto_1.SolicitudAnularEmailFacturaDTO]),
    __metadata("design:returntype", Promise)
], PrepararFacturaController.prototype, "anularEmailFactura", null);
__decorate([
    (0, common_1.Get)('facturasPendientes'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Texto de factura electronica xml',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrepararFacturaController.prototype, "facturasPendientes", null);
PrepararFacturaController = __decorate([
    (0, global_decorator_1.CredentialApiHeaders)(),
    (0, swagger_1.ApiTags)('preparar-factura'),
    (0, common_1.Controller)('preparar-factura'),
    __metadata("design:paramtypes", [preparar_factura_service_1.PrepararFacturaService])
], PrepararFacturaController);
exports.PrepararFacturaController = PrepararFacturaController;
//# sourceMappingURL=preparar-factura.controller.js.map