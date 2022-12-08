"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNameTableasxhasdsad1670457788657 = void 0;
class CreateNameTableasxhasdsad1670457788657 {
    constructor() {
        this.name = 'CreateNameTableasxhasdsad1670457788657';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" DROP CONSTRAINT "FK_eba1a13a501d3bd6ebb02ffa063"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "nit" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "items" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "xml" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "pdf" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "json" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "cufd" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "cufd" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "json" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "pdf" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "xml" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "items" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "nit" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "factura" ADD CONSTRAINT "FK_eba1a13a501d3bd6ebb02ffa063" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.CreateNameTableasxhasdsad1670457788657 = CreateNameTableasxhasdsad1670457788657;
//# sourceMappingURL=1670457788657-CreateNameTableasxhasdsad.js.map