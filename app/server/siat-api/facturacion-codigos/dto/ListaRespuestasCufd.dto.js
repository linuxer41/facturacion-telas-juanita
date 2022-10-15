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
exports.ListaRespuestasCufdDTO = void 0;
const MensajesList_dto_1 = require("./MensajesList.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ListaRespuestasCufdDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "codigoControl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "codigoPuntoVenta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "codigoSucursal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "cuis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "fechaVigencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: MensajesList_dto_1.MensajesListDTO, isArray: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ListaRespuestasCufdDTO.prototype, "mensajeServicioList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListaRespuestasCufdDTO.prototype, "transaccion", void 0);
exports.ListaRespuestasCufdDTO = ListaRespuestasCufdDTO;
//# sourceMappingURL=ListaRespuestasCufd.dto.js.map