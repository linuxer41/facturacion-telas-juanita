"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuewMigrations1670459412819 = void 0;
class nuewMigrations1670459412819 {
    constructor() {
        this.name = 'nuewMigrations1670459412819';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "factura" ADD CONSTRAINT "FK_eba1a13a501d3bd6ebb02ffa063" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" DROP CONSTRAINT "FK_eba1a13a501d3bd6ebb02ffa063"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "userId"`);
    }
}
exports.nuewMigrations1670459412819 = nuewMigrations1670459412819;
//# sourceMappingURL=1670459412819-nuew_migrations.js.map