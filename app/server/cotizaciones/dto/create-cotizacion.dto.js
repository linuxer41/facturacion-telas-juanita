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
exports.CreateCotizacionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const cotizacion_item_dto_1 = require("./cotizacion.item.dto");
class CreateCotizacionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Numero de la Cotizacion',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCotizacionDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Nombre del cliente',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCotizacionDto.prototype, "clientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Nit del cliente',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCotizacionDto.prototype, "nit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        type: cotizacion_item_dto_1.CotizacionItemDto,
        required: true,
        description: 'Detalle de la Cotizacion',
        isArray: true,
    }),
    __metadata("design:type", Array)
], CreateCotizacionDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Subtotal de la Cotizacion',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCotizacionDto.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Descuento de la Cotizacion',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCotizacionDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto de la Cotizacion',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCotizacionDto.prototype, "total", void 0);
exports.CreateCotizacionDto = CreateCotizacionDto;
//# sourceMappingURL=create-cotizacion.dto.js.map