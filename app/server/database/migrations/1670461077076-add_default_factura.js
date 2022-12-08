"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDefaultFactura1670461077076 = void 0;
class addDefaultFactura1670461077076 {
    constructor() {
        this.name = 'addDefaultFactura1670461077076';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "pdf" SET DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "pdf" DROP DEFAULT`);
    }
}
exports.addDefaultFactura1670461077076 = addDefaultFactura1670461077076;
//# sourceMappingURL=1670461077076-add_default_factura.js.map