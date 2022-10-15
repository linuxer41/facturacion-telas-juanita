"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml1662998198785 = void 0;
class Xml1662998198785 {
    constructor() {
        this.name = 'Xml1662998198785';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_c261516a8a2ff25e75496072b4"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "fechaFactura"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "fechaFactura" TIMESTAMP NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_c261516a8a2ff25e75496072b4" ON "factura" ("fechaFactura") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_c261516a8a2ff25e75496072b4"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "fechaFactura"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "fechaFactura" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_c261516a8a2ff25e75496072b4" ON "factura" ("fechaFactura") `);
    }
}
exports.Xml1662998198785 = Xml1662998198785;
//# sourceMappingURL=1662998198785-Xml.js.map