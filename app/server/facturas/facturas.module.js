"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasModule = void 0;
const common_1 = require("@nestjs/common");
const facturas_service_1 = require("./facturas.service");
const facturas_controller_1 = require("./facturas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const factura_entity_1 = require("./entities/factura.entity");
const mail_module_1 = require("../mail/mail.module");
const users_module_1 = require("../users/users.module");
let FacturasModule = class FacturasModule {
};
FacturasModule = __decorate([
    (0, common_1.Module)({
        controllers: [facturas_controller_1.FacturasController],
        providers: [facturas_service_1.FacturasService],
        imports: [typeorm_1.TypeOrmModule.forFeature([factura_entity_1.Factura]), mail_module_1.MailModule, users_module_1.UsersModule],
        exports: [facturas_service_1.FacturasService],
    })
], FacturasModule);
exports.FacturasModule = FacturasModule;
//# sourceMappingURL=facturas.module.js.map