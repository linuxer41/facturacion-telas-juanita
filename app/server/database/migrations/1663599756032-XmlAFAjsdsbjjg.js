"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFAjsdsbjjg1663599756032 = void 0;
class XmlAFAjsdsbjjg1663599756032 {
    constructor() {
        this.name = 'XmlAFAjsdsbjjg1663599756032';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "UQ_503f81286c5e49acd6a832abf43"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "UQ_503f81286c5e49acd6a832abf43" UNIQUE ("email")`);
    }
}
exports.XmlAFAjsdsbjjg1663599756032 = XmlAFAjsdsbjjg1663599756032;
//# sourceMappingURL=1663599756032-XmlAFAjsdsbjjg.js.map