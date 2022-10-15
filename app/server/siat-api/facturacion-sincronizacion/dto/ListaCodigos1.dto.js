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
exports.ListaCodigos1DTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ListaCodigos1DTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaCodigos1DTO.prototype, "codigoActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaCodigos1DTO.prototype, "codigoProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaCodigos1DTO.prototype, "descripcionProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Array,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ListaCodigos1DTO.prototype, "nandina", void 0);
exports.ListaCodigos1DTO = ListaCodigos1DTO;
//# sourceMappingURL=ListaCodigos1.dto.js.map