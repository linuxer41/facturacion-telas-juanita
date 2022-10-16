"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepararFacturaModule = void 0;
const common_1 = require("@nestjs/common");
const preparar_factura_service_1 = require("./preparar-factura.service");
const preparar_factura_controller_1 = require("./preparar-factura.controller");
const typeorm_1 = require("@nestjs/typeorm");
const factura_entity_1 = require("../../facturas/entities/factura.entity");
const facturas_module_1 = require("../../facturas/facturas.module");
const facturacion_operaciones_module_1 = require("../../siat-api/facturacion-operaciones/facturacion-operaciones.module");
const servicio_facturacion_compra_venta_module_1 = require("../../siat-api/servicio-facturacion-compra-venta/servicio-facturacion-compra-venta.module");
const mail_module_1 = require("../../mail/mail.module");
const clientes_module_1 = require("../../clientes/clientes.module");
const config_1 = require("@nestjs/config");
let PrepararFacturaModule = class PrepararFacturaModule {
};
PrepararFacturaModule = __decorate([
    (0, common_1.Module)({
        controllers: [preparar_factura_controller_1.PrepararFacturaController],
        providers: [preparar_factura_service_1.PrepararFacturaService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([factura_entity_1.Factura]),
            facturas_module_1.FacturasModule,
            facturacion_operaciones_module_1.FacturacionOperacionesModule,
            servicio_facturacion_compra_venta_module_1.ServicioFacturacionCompraVentaModule,
            mail_module_1.MailModule,
            clientes_module_1.ClientesModule,
            config_1.ConfigModule,
        ],
    })
], PrepararFacturaModule);
exports.PrepararFacturaModule = PrepararFacturaModule;
//# sourceMappingURL=preparar-factura.module.js.map