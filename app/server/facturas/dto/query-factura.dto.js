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
exports.QueryFacturaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const api_1 = require("../../utils/api");
class QueryFacturaDto extends api_1.BaseQueryDto {
    constructor() {
        super(...arguments);
        this.clientName = '';
        this.nit = '';
        this.numero = '';
        this.cuf = '';
        this.tipoEmision = '';
        this.estado = '';
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QueryFacturaDto.prototype, "clientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QueryFacturaDto.prototype, "nit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QueryFacturaDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QueryFacturaDto.prototype, "cuf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QueryFacturaDto.prototype, "tipoEmision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QueryFacturaDto.prototype, "estado", void 0);
exports.QueryFacturaDto = QueryFacturaDto;
//# sourceMappingURL=query-factura.dto.js.map