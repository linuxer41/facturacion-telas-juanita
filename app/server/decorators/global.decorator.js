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
exports.CredentialApiHeaders = exports.AppCredential = exports.VerificarComunicacionDto = exports.AppCrediantialDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AppCrediantialDto {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)({ name: 'apiKey' }),
    __metadata("design:type", String)
], AppCrediantialDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)({ name: 'siatApiKey' }),
    __metadata("design:type", String)
], AppCrediantialDto.prototype, "siatApiKey", void 0);
exports.AppCrediantialDto = AppCrediantialDto;
class VerificarComunicacionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Código de Comunicación',
        required: true,
        example: 2,
    }),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], VerificarComunicacionDto.prototype, "codigoAmbiente", void 0);
exports.VerificarComunicacionDto = VerificarComunicacionDto;
exports.AppCredential = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const { api_key } = req.headers;
    let { siat_api_key } = req.headers;
    if (!siat_api_key) {
        siat_api_key =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJGcmFuY28wMTIiLCJjb2RpZ29TaXN0ZW1hIjoiNzIxQTVBRTE1REMzMzVCRjY3NjM4QjYiLCJuaXQiOiJINHNJQUFBQUFBQUFBRE14TkRHek5ETXdNRFFDQUFvRE1xWUtBQUFBIiwiaWQiOjQ5MDUxNCwiZXhwIjoxNjkwNTg4ODAwLCJpYXQiOjE2NTkwNzI1NTQsIm5pdERlbGVnYWRvIjo0MTQ2OTYwMDEyLCJzdWJzaXN0ZW1hIjoiU0ZFIn0.1joGHujUq470w59si0gRqaw4fkfd13QkBOOOETtw1dKDYA7ZH7JreZMHyYBiAWB2chVntnwx-x4ezNFBT1NQdw';
    }
    if (!siat_api_key) {
        throw new common_1.UnauthorizedException('No se ha proporcionado el apiKey para la autenticación');
    }
    if (!siat_api_key) {
        throw new common_1.UnauthorizedException('No se ha proporcionado el siatApiKey para la autenticación');
    }
    return {
        apiKey: api_key,
        siatApiKey: siat_api_key,
    };
});
function CredentialApiHeaders() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiSecurity)('api_key'), (0, swagger_1.ApiSecurity)('siat_api_key'));
}
exports.CredentialApiHeaders = CredentialApiHeaders;
//# sourceMappingURL=global.decorator.js.map