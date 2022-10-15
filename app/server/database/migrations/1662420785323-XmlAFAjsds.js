"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFAjsds1662420785323 = void 0;
class XmlAFAjsds1662420785323 {
    constructor() {
        this.name = 'XmlAFAjsds1662420785323';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "estado" text NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_9fadcf46a3f35232515cf4eeff" ON "factura" ("estado") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_9fadcf46a3f35232515cf4eeff"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "estado"`);
    }
}
exports.XmlAFAjsds1662420785323 = XmlAFAjsds1662420785323;
//# sourceMappingURL=1662420785323-XmlAFAjsds.js.map