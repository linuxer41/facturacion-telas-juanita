"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAJBl1662559143497 = void 0;
class XmlAJBl1662559143497 {
    constructor() {
        this.name = 'XmlAJBl1662559143497';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_9ddde7e55f925e7d801ddaa39b"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "metodoEmision"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "cufd" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "tipoEmision" text NOT NULL DEFAULT 'EN LINEA'`);
        await queryRunner.query(`CREATE INDEX "IDX_14d8be3eacee56073ff450f6f1" ON "factura" ("cufd") `);
        await queryRunner.query(`CREATE INDEX "IDX_9a0b36d94e8dcc54df3b04e294" ON "factura" ("tipoEmision") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_9a0b36d94e8dcc54df3b04e294"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_14d8be3eacee56073ff450f6f1"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "tipoEmision"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "cufd"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "metodoEmision" text NOT NULL DEFAULT 'EN LINEA'`);
        await queryRunner.query(`CREATE INDEX "IDX_9ddde7e55f925e7d801ddaa39b" ON "factura" ("metodoEmision") `);
    }
}
exports.XmlAJBl1662559143497 = XmlAJBl1662559143497;
//# sourceMappingURL=1662559143497-XmlAJBl.js.map