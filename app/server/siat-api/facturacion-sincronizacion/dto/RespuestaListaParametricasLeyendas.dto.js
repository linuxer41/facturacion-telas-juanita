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
exports.RespuestaListaParametricasLeyendasDTO = void 0;
const MensajesList_dto_1 = require("./MensajesList.dto");
const ListaLeyendas_dto_1 = require("./ListaLeyendas.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RespuestaListaParametricasLeyendasDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: MensajesList_dto_1.MensajesListDTO,
        isArray: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], RespuestaListaParametricasLeyendasDTO.prototype, "mensajesList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RespuestaListaParametricasLeyendasDTO.prototype, "transaccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ListaLeyendas_dto_1.ListaLeyendasDTO,
        isArray: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], RespuestaListaParametricasLeyendasDTO.prototype, "listaLeyendas", void 0);
exports.RespuestaListaParametricasLeyendasDTO = RespuestaListaParametricasLeyendasDTO;
//# sourceMappingURL=RespuestaListaParametricasLeyendas.dto.js.map