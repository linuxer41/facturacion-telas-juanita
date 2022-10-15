"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFAjsdsbj1662996195314 = void 0;
class XmlAFAjsdsbj1662996195314 {
    constructor() {
        this.name = 'XmlAFAjsdsbj1662996195314';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "fechaFactura" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_c261516a8a2ff25e75496072b4" ON "factura" ("fechaFactura") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_c261516a8a2ff25e75496072b4"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "fechaFactura"`);
    }
}
exports.XmlAFAjsdsbj1662996195314 = XmlAFAjsdsbj1662996195314;
//# sourceMappingURL=1662996195314-XmlAFAjsdsbj.js.map