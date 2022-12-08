"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuewMigration1670459278685 = void 0;
class nuewMigration1670459278685 {
    constructor() {
        this.name = 'nuewMigration1670459278685';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "clientName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "nit" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "items" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "xml" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "pdf" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "json" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "json" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "pdf" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "xml" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "items" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "nit" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "factura" ALTER COLUMN "clientName" DROP NOT NULL`);
    }
}
exports.nuewMigration1670459278685 = nuewMigration1670459278685;
//# sourceMappingURL=1670459278685-nuew_migration.js.map