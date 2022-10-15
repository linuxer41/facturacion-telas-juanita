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
exports.FacturacionSincronizacionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const global_decorator_1 = require("../../decorators/global.decorator");
const facturacion_sincronizacion_service_1 = require("./facturacion-sincronizacion.service");
const RespuestaFechaHora_dto_1 = require("./dto/RespuestaFechaHora.dto");
const RespuestaListaActividades_dto_1 = require("./dto/RespuestaListaActividades.dto");
const RespuestaListaParametricas_dto_1 = require("./dto/RespuestaListaParametricas.dto");
const RespuestaListaParametricasLeyendas_dto_1 = require("./dto/RespuestaListaParametricasLeyendas.dto");
const RespuestaListaProductos_dto_1 = require("./dto/RespuestaListaProductos.dto");
const Return_dto_1 = require("./dto/Return.dto");
const SolicitudSincronizacion_dto_1 = require("./dto/SolicitudSincronizacion.dto");
const RespuestaListaActividadesDocumentoSector_dto_1 = require("./dto/RespuestaListaActividadesDocumentoSector.dto");
let FacturacionSincronizacionController = class FacturacionSincronizacionController {
    constructor(facturacionSincronizacionService) {
        this.facturacionSincronizacionService = facturacionSincronizacionService;
    }
    async sincronizarParametricaMotivoAnulacion(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaMotivoAnulacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarActividades(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarActividades(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarFechaHora(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarFechaHora(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarListaLeyendasFactura(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarListaLeyendasFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoHabitacion(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoHabitacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarListaActividadesDocumentoSector(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarListaActividadesDocumentoSector(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoDocumentoIdentidad(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoDocumentoIdentidad(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaUnidadMedida(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaUnidadMedida(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoDocumentoSector(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoDocumentoSector(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTiposFactura(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTiposFactura(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async verificarComunicacion(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.verificarComunicacion(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarListaMensajesServicios(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarListaMensajesServicios(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoMetodoPago(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoMetodoPago(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaEventosSignificativos(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaEventosSignificativos(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoPuntoVenta(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoPuntoVenta(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarListaProductosServicios(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarListaProductosServicios(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoEmision(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoEmision(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaPaisOrigen(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaPaisOrigen(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async sincronizarParametricaTipoMoneda(credential, solicitud) {
        try {
            return await this.facturacionSincronizacionService.sincronizarParametricaTipoMoneda(credential, solicitud);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-motivo-anulacion'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de motivo de anulacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaMotivoAnulacion", null);
__decorate([
    (0, common_1.Post)('sincronizar-actividades'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaActividades_dto_1.RespuestaListaActividadesDTO,
        description: 'Optiene la lista de actividades',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarActividades", null);
__decorate([
    (0, common_1.Post)('sincronizar-fecha-hora'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaFechaHora_dto_1.RespuestaFechaHoraDTO,
        description: 'Optiene la fecha y hora',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarFechaHora", null);
__decorate([
    (0, common_1.Post)('sincronizar-lista-leyendas-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricasLeyendas_dto_1.RespuestaListaParametricasLeyendasDTO,
        description: 'Optiene la lista de leyendas de factura',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarListaLeyendasFactura", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-habitacion'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de habitacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoHabitacion", null);
__decorate([
    (0, common_1.Post)('sincronizar-lista-actividades-documento-sector'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaActividadesDocumentoSector_dto_1.RespuestaListaActividadesDocumentoSectorDTO,
        description: 'Optiene la lista de actividades de documento sector',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarListaActividadesDocumentoSector", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-documento-identidad'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de documento de identidad',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoDocumentoIdentidad", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-unidad-medida'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de unidad de medida',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaUnidadMedida", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-documento-sector'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de documento sector',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoDocumentoSector", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipos-factura'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipos de factura',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTiposFactura", null);
__decorate([
    (0, common_1.Post)('verificar-comunicacion'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: Return_dto_1.ReturnDTO,
        description: 'Verifica la comunicacion con el servicio de facturacion',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        global_decorator_1.VerificarComunicacionDto]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "verificarComunicacion", null);
__decorate([
    (0, common_1.Post)('sincronizar-lista-mensajes-servicios'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de mensajes de servicios',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarListaMensajesServicios", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-metodo-pago'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de metodo de pago',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoMetodoPago", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-eventos-significativos'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de eventos significativos',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaEventosSignificativos", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-punto-venta'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de punto de venta',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoPuntoVenta", null);
__decorate([
    (0, common_1.Post)('sincronizar-lista-productos-servicios'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaProductos_dto_1.RespuestaListaProductosDTO,
        description: 'Optiene la lista de productos de servicios',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarListaProductosServicios", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-emision'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de emision',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoEmision", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-pais-origen'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de pais de origen',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaPaisOrigen", null);
__decorate([
    (0, common_1.Post)('sincronizar-parametrica-tipo-moneda'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: RespuestaListaParametricas_dto_1.RespuestaListaParametricasDTO,
        description: 'Optiene la lista de parametricas de tipo de moneda',
    }),
    __param(0, (0, global_decorator_1.AppCredential)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_decorator_1.AppCrediantialDto,
        SolicitudSincronizacion_dto_1.SolicitudSincronizacionDTO]),
    __metadata("design:returntype", Promise)
], FacturacionSincronizacionController.prototype, "sincronizarParametricaTipoMoneda", null);
FacturacionSincronizacionController = __decorate([
    (0, global_decorator_1.CredentialApiHeaders)(),
    (0, swagger_1.ApiTags)('facturacion-sincronizacion'),
    (0, common_1.Controller)('facturacion-sincronizacion'),
    __metadata("design:paramtypes", [facturacion_sincronizacion_service_1.FacturacionSincronizacionService])
], FacturacionSincronizacionController);
exports.FacturacionSincronizacionController = FacturacionSincronizacionController;
//# sourceMappingURL=facturacion-sincronizacion.controller.js.map