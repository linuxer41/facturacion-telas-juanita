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
exports.SolicitudCufdDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const BaseCodigos_dto_1 = require("./BaseCodigos.dto");
class SolicitudCufdDTO extends BaseCodigos_dto_1.BaseCodigosDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SolicitudCufdDTO.prototype, "codigoModalidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SolicitudCufdDTO.prototype, "codigoPuntoVenta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 0, required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SolicitudCufdDTO.prototype, "codigoSucursal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '5C6C5A03',
        required: true,
        description: 'Codigo unico de inicio de sistema',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SolicitudCufdDTO.prototype, "cuis", void 0);
exports.SolicitudCufdDTO = SolicitudCufdDTO;
//# sourceMappingURL=SolicitudCufd.dto.js.map