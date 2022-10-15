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
exports.ServicioFacturacionCompraVentaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const global_decorator_1 = require("../../decorators/global.decorator");
const servicio_facturacion_compra_venta_service_1 = require("./servicio-facturacion-compra-venta.service");
const RespuestaServicioFacturacion_dto_1 = require("./dto/RespuestaServicioFacturacion.dto");
const Return_dto_1 = require("./dto/Return.dto");
const SolicitudRecepcionAnexos_dto_1 = require("./dto/SolicitudRecepcionAnexos.dto");
const SolicitudServicioAnulacionFactura_dto_1 = require("./dto/SolicitudServicioAnulacionFactura.dto");
const SolicitudServicioRecepcionFactura_dto_1 = require("./dto/SolicitudServicioRecepcionFactura.dto");
const SolicitudServicioRecepcionMasiva_dto_1 = require("./dto/SolicitudServicioRecepcionMasiva.dto");
const SolicitudServicioRecepcionPaquete_dto_1 = require("./dto/SolicitudServicioRecepcionPaquete.dto");
const SolicitudServicioValidacionRecepcionMasiva_dto_1 = require("./dto/SolicitudServicioValidacionRecepcionMasiva.dto");
const SolicitudServicioVerificacionEstadoFactura_dto_1 = require("./dto/SolicitudServicioVerificacionEstadoFactura.dto");
let ServicioFacturacionCompraVentaController = class ServicioFacturacionCompraVentaController {
    constructor(servicioFacturacionCompraVentaService) {
        this.servicioFacturacionCompraVentaService = servicioFacturacionCompraVentaService;
    }
    async recepcionPaqueteFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.recepcionPaqueteFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async verificarComunicacion(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.verificarComunicacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async recepcionFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.recepcionFactura(credential, solicitud);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async validacionRecepcionMasivaFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.validacionRecepcionMasivaFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async recepcionAnexos(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.recepcionAnexos(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async recepcionMasivaFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.recepcionMasivaFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async validacionRecepcionPaqueteFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.validacionRecepcionPaqueteFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async verificacionEstadoFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.verificacionEstadoFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async anulacionFactura(credential, solicitud) {
        try {
            return await this.servicioFacturacionCompraVentaService.anulacionFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('recepcion-paquete-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Optiene la lista de parametricas de motivo de anulacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioRecepcionPaquete_dto_1.SolicitudServicioRecepcionPaqueteDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "recepcionPaqueteFactura", null);
__decorate([
    (0, common_1.Post)('verificar-comunicacion'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: Return_dto_1.ReturnDTO,
        description: 'Optiene la lista de parametricas de motivo de anulacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        global_decorator_1.VerificarComunicacionDto]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "verificarComunicacion", null);
__decorate([
    (0, common_1.Post)('recepcion-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Recepcion de factura',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioRecepcionFactura_dto_1.SolicitudServicioRecepcionFacturaDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "recepcionFactura", null);
__decorate([
    (0, common_1.Post)('validacion-recepcion-masiva-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Recepcion masiva de factura',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioValidacionRecepcionMasiva_dto_1.SolicitudServicioValidacionRecepcionMasivaDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "validacionRecepcionMasivaFactura", null);
__decorate([
    (0, common_1.Post)('recepcion-anexos'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Recepcion de anexos',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudRecepcionAnexos_dto_1.SolicitudRecepcionAnexosDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "recepcionAnexos", null);
__decorate([
    (0, common_1.Post)('recepcion-masiva-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Recepcion de facturas masivas',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioRecepcionMasiva_dto_1.SolicitudServicioRecepcionMasivaDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "recepcionMasivaFactura", null);
__decorate([
    (0, common_1.Post)('validacion-recepcion-paquete-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Validacion de recepcion de paquetes de facturas',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioValidacionRecepcionMasiva_dto_1.SolicitudServicioValidacionRecepcionMasivaDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "validacionRecepcionPaqueteFactura", null);
__decorate([
    (0, common_1.Post)('verificacion-estado-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Optiene la lista de parametricas de motivo de anulacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioVerificacionEstadoFactura_dto_1.SolicitudServicioVerificacionEstadoFacturaDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "verificacionEstadoFactura", null);
__decorate([
    (0, common_1.Post)('anulacion-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaServicioFacturacion_dto_1.RespuestaServicioFacturacionDTO,
        description: 'Actualiza el estado de la factura',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudServicioAnulacionFactura_dto_1.SolicitudServicioAnulacionFacturaDTO]),
    __metadata("design:returntype", Promise)
], ServicioFacturacionCompraVentaController.prototype, "anulacionFactura", null);
ServicioFacturacionCompraVentaController = __decorate([
    (0, global_decorator_1.CredentialApiHeaders)(),
    (0, swagger_1.ApiTags)('servicio-facturacion-compra-venta'),
    (0, common_1.Controller)('servicio-facturacion-compra-venta'),
    __metadata("design:paramtypes", [servicio_facturacion_compra_venta_service_1.ServicioFacturacionCompraVentaService])
], ServicioFacturacionCompraVentaController);
exports.ServicioFacturacionCompraVentaController = ServicioFacturacionCompraVentaController;
//# sourceMappingURL=servicio-facturacion-compra-venta.controller.js.map