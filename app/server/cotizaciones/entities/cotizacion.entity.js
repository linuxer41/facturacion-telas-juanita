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
exports.Cotizacion = void 0;
const entity_helper_1 = require("../../utils/entity-helper");
const typeorm_1 = require("typeorm");
let Cotizacion = class Cotizacion extends entity_helper_1.EntityHelper {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cotizacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cotizacion.prototype, "clientName", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cotizacion.prototype, "nit", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Array)
], Cotizacion.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('decimal', { nullable: false }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('decimal', { nullable: false }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('decimal', { nullable: false }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Cotizacion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Cotizacion.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Cotizacion.prototype, "deletedAt", void 0);
Cotizacion = __decorate([
    (0, typeorm_1.Entity)()
], Cotizacion);
exports.Cotizacion = Cotizacion;
//# sourceMappingURL=cotizacion.entity.js.map