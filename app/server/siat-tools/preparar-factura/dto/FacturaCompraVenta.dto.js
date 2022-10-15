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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaCompraVentaDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const FacturaCompraVentaCabecera_dto_1 = require("./FacturaCompraVentaCabecera.dto");
const FacturaCompraVentaDetalle_dto_1 = require("./FacturaCompraVentaDetalle.dto");
const SolicitudPreparFactura_dto_1 = require("./SolicitudPreparFactura.dto");
class FacturaCompraVentaDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: SolicitudPreparFactura_dto_1.SolicitudPreparFactura,
        required: true,
        description: 'Eleccrion de ambiente y modalidad de facturacion',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", SolicitudPreparFactura_dto_1.SolicitudPreparFactura)
], FacturaCompraVentaDTO.prototype, "solicitud", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: FacturaCompraVentaCabecera_dto_1.FacturaCompraVentaCabeceraDTO,
        required: true,
        description: 'Cabecera de la factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", FacturaCompraVentaCabecera_dto_1.FacturaCompraVentaCabeceraDTO)
], FacturaCompraVentaDTO.prototype, "cabecera", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: FacturaCompraVentaDetalle_dto_1.FacturaCompraVentaDetalleDTO,
        required: true,
        description: 'Detalle de la factura',
        isArray: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], FacturaCompraVentaDTO.prototype, "detalle", void 0);
exports.FacturaCompraVentaDTO = FacturaCompraVentaDTO;
//# sourceMappingURL=FacturaCompraVenta.dto.js.map