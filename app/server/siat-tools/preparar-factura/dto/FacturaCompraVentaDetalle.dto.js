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
exports.FacturaCompraVentaDetalleDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FacturaCompraVentaDetalleDTO {
    constructor() {
        this.montoDescuento = null;
        this.numeroSerie = null;
        this.numeroImei = null;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Actividad económica registrada en el Padrón Nacional de Contribuyentes relacionada al NIT.',
        example: 'Venta de productos de consumo',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaDetalleDTO.prototype, "actividadEconomica", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Homologado a los códigos de productos genéricos enviados por el SIN a través del servicio de sincronización.',
        example: 1554,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaDetalleDTO.prototype, "codigoProductoSin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Código que otorga el contribuyente a su servicio o producto.',
        example: 'JDOD444G',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaDetalleDTO.prototype, "codigoProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Descripción que otorga el contribuyente a su servicio o producto.',
        example: 'Juego de dadoS',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaDetalleDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Cantidad del producto o servicio otorgado. En caso de servicio este valor debe ser 1.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaDetalleDTO.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Valor de la paramétrica que identifica la unidad de medida.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaDetalleDTO.prototype, "unidadMedida", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Precio que otorga el contribuyente a su servicio o producto.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaDetalleDTO.prototype, "precioUnitario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Monto de descuento sobre el producto o servicio específico,  Si no aplica deberá ser nulo.',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaDetalleDTO.prototype, "montoDescuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'El subtotal es igual a la (cantidad * precio unitario) – descuento.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaDetalleDTO.prototype, "subTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Número de serie correspondiente al producto vendido de línea blanca o negra. Nulo en otro caso.',
        example: null,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FacturaCompraVentaDetalleDTO.prototype, "numeroSerie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Número de Imei del celular vendido. Nulo en otro caso.',
        example: null,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FacturaCompraVentaDetalleDTO.prototype, "numeroImei", void 0);
exports.FacturaCompraVentaDetalleDTO = FacturaCompraVentaDetalleDTO;
//# sourceMappingURL=FacturaCompraVentaDetalle.dto.js.map