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
exports.BaseCodigosDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BaseCodigosDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 2, required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseCodigosDTO.prototype, "codigoAmbiente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '721A5AE15DC335BF67638B6',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseCodigosDTO.prototype, "codigoSistema", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 4146960012, required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseCodigosDTO.prototype, "nit", void 0);
exports.BaseCodigosDTO = BaseCodigosDTO;
//# sourceMappingURL=BaseCodigos.dto.js.map