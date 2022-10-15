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
exports.ServicioRecepcionComprasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const global_decorator_1 = require("../../decorators/global.decorator");
const servicio_recepcion_compras_service_1 = require("./servicio-recepcion-compras.service");
const RespuestaServicioFacturacion_dto_1 = require("./dto/RespuestaServicioFacturacion.dto");
const Return_dto_1 = require("./dto/Return.dto");
const SolicitudAnulacionCompra_dto_1 = require("./dto/SolicitudAnulacionCompra.dto");
const SolicitudConsultaCompras_dto_1 = require("./dto/SolicitudConsultaCompras.dto");
const SolicitudRecepcionCompras_dto_1 = require("./dto/SolicitudRecepcionCompras.dto");
const SolicitudValidacionRecepcionCompras_dto_1 = require("./dto/SolicitudValidacionRecepcionCompras.dto");
let ServicioRecepcionComprasController = class ServicioRecepcionComprasController {
    constructor(servicioRecepcionComprasService) {
        this.servicioRecepcionComprasService = servicioRecepcionComprasService;
    }
    async verificarComunicacion(credential, solicitud) {
        try {
            return await this.servicioRecepcionComprasService.verificarComunicacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async validacionRecepcionPaqueteCompras(credential, solicitud) {
        try {
            return await this.servicioRecepcionComprasService.validacionRecepcionPaqueteCompras(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async recepcionPaqueteCompras(credential, solicitud) {
        try {
            return await this.servicioRecepcionComprasService.recepcionPaqueteCompras(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async anulacionCompra(credential, solicitud) {
        try {
            return await this.servicioRecepcionComprasService.anulacionCompra(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async confirmacionCompras(credential, solicitud) {
        try {
            return await this.servicioRecepcionComprasService.confirmacionCompras(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async consultaCompras(credential, solicitud) {
        try {
            return await this.servicioRecepcionComprasService.consultaCompras(credential, solicitud);
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
        description: 'Verificar comunicacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        global_decorator_1.VerificarComunicacionDto]),
    __metadata("design:returntype", Promise)
], ServicioRecepcionComprasController.prototype, "verificarComunicacion", null);
__decorate([
    (0, common_1.Post)('validacion-recepcion-paquete-compras'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Validacion recepcion paquete compras',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudValidacionRecepcionCompras_dto_1.SolicitudValidacionRecepcionComprasDTO]),
    __metadata("design:returntype", Promise)
], ServicioRecepcionComprasController.prototype, "validacionRecepcionPaqueteCompras", null);
__decorate([
    (0, common_1.Post)('recepcion-paquete-compras'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Recepcion paquete compras',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudRecepcionCompras_dto_1.SolicitudRecepcionComprasDTO]),
    __metadata("design:returntype", Promise)
], ServicioRecepcionComprasController.prototype, "recepcionPaqueteCompras", null);
__decorate([
    (0, common_1.Post)('anulacion-compra'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Anulacion compra',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudAnulacionCompra_dto_1.SolicitudAnulacionCompraDTO]),
    __metadata("design:returntype", Promise)
], ServicioRecepcionComprasController.prototype, "anulacionCompra", null);
__decorate([
    (0, common_1.Post)('confirmacion-compras'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Confirmacion compras',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudRecepcionCompras_dto_1.SolicitudRecepcionComprasDTO]),
    __metadata("design:returntype", Promise)
], ServicioRecepcionComprasController.prototype, "confirmacionCompras", null);
__decorate([
    (0, common_1.Post)('consulta-compras'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Consulta compras',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudConsultaCompras_dto_1.SolicitudConsultaComprasDTO]),
    __metadata("design:returntype", Promise)
], ServicioRecepcionComprasController.prototype, "consultaCompras", null);
ServicioRecepcionComprasController = __decorate([
    (0, global_decorator_1.CredentialApiHeaders)(),
    (0, swagger_1.ApiTags)('servicio-recepcion-compras'),
    (0, common_1.Controller)('servicio-recepcion-compras'),
    __metadata("design:paramtypes", [servicio_recepcion_compras_service_1.ServicioRecepcionComprasService])
], ServicioRecepcionComprasController);
exports.ServicioRecepcionComprasController = ServicioRecepcionComprasController;
//# sourceMappingURL=servicio-recepcion-compras.controller.js.map