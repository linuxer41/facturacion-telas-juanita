"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml54gf1663013364725 = void 0;
class Xml54gf1663013364725 {
    constructor() {
        this.name = 'Xml54gf1663013364725';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" DROP CONSTRAINT "UQ_393c240e12215225afd2d32eb4f"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "factura" ADD CONSTRAINT "UQ_393c240e12215225afd2d32eb4f" UNIQUE ("numero")`);
    }
}
exports.Xml54gf1663013364725 = Xml54gf1663013364725;
//# sourceMappingURL=1663013364725-Xml54gf.js.map