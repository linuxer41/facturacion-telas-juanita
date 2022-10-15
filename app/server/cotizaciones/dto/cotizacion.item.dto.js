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
exports.CotizacionItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CotizacionItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Numero de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CotizacionItemDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Detalle o NOMBRE del producto',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CotizacionItemDto.prototype, "detalle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Medida del producto',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CotizacionItemDto.prototype, "medida", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Codigo del producto',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CotizacionItemDto.prototype, "codigoProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CotizacionItemDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CotizacionItemDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CotizacionItemDto.prototype, "subtotal", void 0);
exports.CotizacionItemDto = CotizacionItemDto;
//# sourceMappingURL=cotizacion.item.dto.js.map