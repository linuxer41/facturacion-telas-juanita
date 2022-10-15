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
exports.Producto = void 0;
const entity_helper_1 = require("../../utils/entity-helper");
const typeorm_1 = require("typeorm");
let Producto = class Producto extends entity_helper_1.EntityHelper {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Producto.prototype, "detalle", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Producto.prototype, "codigoProducto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "codigoProductoSiat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "codigoUnidadMedida", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Producto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Producto.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Producto.prototype, "deletedAt", void 0);
Producto = __decorate([
    (0, typeorm_1.Entity)()
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.entity.js.map