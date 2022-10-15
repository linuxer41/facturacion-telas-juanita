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
exports.SolicitudCuisMasivoSistemasDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const BaseCodigos_dto_1 = require("./BaseCodigos.dto");
const DatosSolicitud_dto_1 = require("./DatosSolicitud.dto");
class SolicitudCuisMasivoSistemasDTO extends BaseCodigos_dto_1.BaseCodigosDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SolicitudCuisMasivoSistemasDTO.prototype, "codigoModalidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DatosSolicitud_dto_1.DatosSolicitudDTO, required: true, isArray: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], SolicitudCuisMasivoSistemasDTO.prototype, "datosSolicitud", void 0);
exports.SolicitudCuisMasivoSistemasDTO = SolicitudCuisMasivoSistemasDTO;
//# sourceMappingURL=SolicitudCuisMasivoSistemas.dto.js.map