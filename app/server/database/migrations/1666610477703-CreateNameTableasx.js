"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNameTableasx1666610477703 = void 0;
class CreateNameTableasx1666610477703 {
    constructor() {
        this.name = 'CreateNameTableasx1666610477703';
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
exports.CreateNameTableasx1666610477703 = CreateNameTableasx1666610477703;
//# sourceMappingURL=1666610477703-CreateNameTableasx.js.map