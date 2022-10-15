"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAJB1662534261785 = void 0;
class XmlAJB1662534261785 {
    constructor() {
        this.name = 'XmlAJB1662534261785';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "metodoEmision" text NOT NULL DEFAULT 'EN LINEA'`);
        await queryRunner.query(`CREATE INDEX "IDX_9ddde7e55f925e7d801ddaa39b" ON "factura" ("metodoEmision") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_9ddde7e55f925e7d801ddaa39b"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "metodoEmision"`);
    }
}
exports.XmlAJB1662534261785 = XmlAJB1662534261785;
//# sourceMappingURL=1662534261785-XmlAJB.js.map