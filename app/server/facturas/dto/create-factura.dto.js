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
exports.CreateFacturaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../users/entities/user.entity");
const factura_item_dto_1 = require("./factura.item.dto");
class CreateFacturaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Numero de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Nombre del cliente',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "clientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Nit del cliente',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "nit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        type: factura_item_dto_1.FacturaItemDto,
        required: true,
        description: 'Detalle de la Factura',
        isArray: true,
    }),
    __metadata("design:type", Array)
], CreateFacturaDto.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'xml de la Factura',
    }),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "xml", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'pdf de la Factura',
    }),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "pdf", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Object,
        required: true,
        description: 'json de la Factura',
    }),
    __metadata("design:type", Object)
], CreateFacturaDto.prototype, "json", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Subtotal de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Descuento de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Codigo de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "cuf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Codigo unido diario de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "cufd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Estado de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Metodo de emision de la Factura',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "tipoEmision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Metodo de emision de la Factura',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateFacturaDto.prototype, "fechaFactura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: user_entity_1.User,
        required: true,
        description: 'Usuario que creo la Factura',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", user_entity_1.User)
], CreateFacturaDto.prototype, "user", void 0);
exports.CreateFacturaDto = CreateFacturaDto;
//# sourceMappingURL=create-factura.dto.js.map