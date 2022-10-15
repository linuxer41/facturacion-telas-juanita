"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFAjs1662420204826 = void 0;
class XmlAFAjs1662420204826 {
    constructor() {
        this.name = 'XmlAFAjs1662420204826';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "json" jsonb`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "json"`);
    }
}
exports.XmlAFAjs1662420204826 = XmlAFAjs1662420204826;
//# sourceMappingURL=1662420204826-XmlAFAjs.js.map