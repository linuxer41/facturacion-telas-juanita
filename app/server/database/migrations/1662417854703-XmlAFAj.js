"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFAj1662417854703 = void 0;
class XmlAFAj1662417854703 {
    constructor() {
        this.name = 'XmlAFAj1662417854703';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "cuf" text NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_9bf0080547ccc3a41338f87763" ON "factura" ("cuf") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_9bf0080547ccc3a41338f87763"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "cuf"`);
    }
}
exports.XmlAFAj1662417854703 = XmlAFAj1662417854703;
//# sourceMappingURL=1662417854703-XmlAFAj.js.map