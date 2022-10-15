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
exports.Factura = void 0;
const entity_helper_1 = require("../../utils/entity-helper");
const typeorm_1 = require("typeorm");
let Factura = class Factura extends entity_helper_1.EntityHelper {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Factura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: false, unique: false }),
    __metadata("design:type", Number)
], Factura.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Factura.prototype, "clientName", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Factura.prototype, "nit", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Array)
], Factura.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Factura.prototype, "xml", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Factura.prototype, "pdf", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Object)
], Factura.prototype, "json", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('decimal', { nullable: false }),
    __metadata("design:type", Number)
], Factura.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('decimal', { nullable: false }),
    __metadata("design:type", Number)
], Factura.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('decimal', { nullable: false }),
    __metadata("design:type", Number)
], Factura.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('text', { nullable: false }),
    __metadata("design:type", String)
], Factura.prototype, "cuf", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('text', { nullable: false, default: '' }),
    __metadata("design:type", String)
], Factura.prototype, "cufd", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('text', { nullable: false }),
    __metadata("design:type", String)
], Factura.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('text', { nullable: false, default: 'EN LINEA' }),
    __metadata("design:type", String)
], Factura.prototype, "tipoEmision", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('timestamp', { nullable: false }),
    __metadata("design:type", Date)
], Factura.prototype, "fechaFactura", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Factura.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Factura.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Factura.prototype, "deletedAt", void 0);
Factura = __decorate([
    (0, typeorm_1.Entity)()
], Factura);
exports.Factura = Factura;
//# sourceMappingURL=factura.entity.js.map