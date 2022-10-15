"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFA1661781356543 = void 0;
class XmlAFA1661781356543 {
    constructor() {
        this.name = 'XmlAFA1661781356543';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_27b31559fedc6d9e9bd64ea627"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" DROP COLUMN "subtotal"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" ADD "subtotal" numeric NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_061a0392f6d4a57ef352ac5fd2"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" DROP COLUMN "descuento"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" ADD "descuento" numeric NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9d38e6915a432b12dfe5b13da"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" ADD "total" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "cantidad"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "cantidad" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "precio" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f980bea5efb593416923493ec"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "subtotal"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "subtotal" numeric NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3424338b696621f13af8874a28"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "descuento"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "descuento" numeric NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4e1b9c3aed2daf2920da0b5039"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "total" numeric NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_27b31559fedc6d9e9bd64ea627" ON "cotizacion" ("subtotal") `);
        await queryRunner.query(`CREATE INDEX "IDX_061a0392f6d4a57ef352ac5fd2" ON "cotizacion" ("descuento") `);
        await queryRunner.query(`CREATE INDEX "IDX_c9d38e6915a432b12dfe5b13da" ON "cotizacion" ("total") `);
        await queryRunner.query(`CREATE INDEX "IDX_9f980bea5efb593416923493ec" ON "factura" ("subtotal") `);
        await queryRunner.query(`CREATE INDEX "IDX_3424338b696621f13af8874a28" ON "factura" ("descuento") `);
        await queryRunner.query(`CREATE INDEX "IDX_4e1b9c3aed2daf2920da0b5039" ON "factura" ("total") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_4e1b9c3aed2daf2920da0b5039"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3424338b696621f13af8874a28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f980bea5efb593416923493ec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9d38e6915a432b12dfe5b13da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_061a0392f6d4a57ef352ac5fd2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_27b31559fedc6d9e9bd64ea627"`);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "total" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_4e1b9c3aed2daf2920da0b5039" ON "factura" ("total") `);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "descuento"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "descuento" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_3424338b696621f13af8874a28" ON "factura" ("descuento") `);
        await queryRunner.query(`ALTER TABLE "factura" DROP COLUMN "subtotal"`);
        await queryRunner.query(`ALTER TABLE "factura" ADD "subtotal" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_9f980bea5efb593416923493ec" ON "factura" ("subtotal") `);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "precio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "cantidad"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "cantidad" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cotizacion" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" ADD "total" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_c9d38e6915a432b12dfe5b13da" ON "cotizacion" ("total") `);
        await queryRunner.query(`ALTER TABLE "cotizacion" DROP COLUMN "descuento"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" ADD "descuento" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_061a0392f6d4a57ef352ac5fd2" ON "cotizacion" ("descuento") `);
        await queryRunner.query(`ALTER TABLE "cotizacion" DROP COLUMN "subtotal"`);
        await queryRunner.query(`ALTER TABLE "cotizacion" ADD "subtotal" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_27b31559fedc6d9e9bd64ea627" ON "cotizacion" ("subtotal") `);
    }
}
exports.XmlAFA1661781356543 = XmlAFA1661781356543;
//# sourceMappingURL=1661781356543-XmlAFA.js.map