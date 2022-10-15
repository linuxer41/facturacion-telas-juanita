"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFAjsdsb1662503726262 = void 0;
class XmlAFAjsdsb1662503726262 {
    constructor() {
        this.name = 'XmlAFAjsdsb1662503726262';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "pdf" text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "pdf"`);
    }
}
exports.XmlAFAjsdsb1662503726262 = XmlAFAjsdsb1662503726262;
//# sourceMappingURL=1662503726262-XmlAFAjsdsb.js.map