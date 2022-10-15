"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAFACsjh1661762237009 = void 0;
class XmlAFACsjh1661762237009 {
    constructor() {
        this.name = 'XmlAFACsjh1661762237009';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "email" character varying, "name" character varying, "phone" character varying, "nit" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_503f81286c5e49acd6a832abf43" UNIQUE ("email"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f53395511a5b6d0df8e8f6c3b7" ON "cliente" ("phone") `);
        await queryRunner.query(`CREATE INDEX "IDX_3a722445847d37bb66f41e1c16" ON "cliente" ("nit") `);
        await queryRunner.query(`CREATE TABLE "role" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying, "password" character varying, "provider" character varying NOT NULL DEFAULT 'email', "socialId" character varying, "firstName" character varying, "lastName" character varying, "hash" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "photoId" uuid, "roleId" integer, "statusId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9bd2fe7a8e694dedc4ec2f666f" ON "user" ("socialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON "user" ("firstName") `);
        await queryRunner.query(`CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON "user" ("lastName") `);
        await queryRunner.query(`CREATE INDEX "IDX_e282acb94d2e3aec10f480e4f6" ON "user" ("hash") `);
        await queryRunner.query(`CREATE TABLE "forgot" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_087959f5bb89da4ce3d763eab75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df507d27b0fb20cd5f7bef9b9a" ON "forgot" ("hash") `);
        await queryRunner.query(`CREATE TABLE "cotizacion" ("id" SERIAL NOT NULL, "numero" integer NOT NULL, "clientName" character varying, "nit" character varying, "items" jsonb, "subtotal" integer NOT NULL, "descuento" integer NOT NULL, "total" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_d0d9025c56f5accfe6161a1b629" UNIQUE ("numero"), CONSTRAINT "PK_84a2ae8abd0e7f658978b29a4b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d0d9025c56f5accfe6161a1b62" ON "cotizacion" ("numero") `);
        await queryRunner.query(`CREATE INDEX "IDX_abfd1103df8e9fee038988e61d" ON "cotizacion" ("clientName") `);
        await queryRunner.query(`CREATE INDEX "IDX_5015c3f5e604cffd2c410417d2" ON "cotizacion" ("nit") `);
        await queryRunner.query(`CREATE INDEX "IDX_27b31559fedc6d9e9bd64ea627" ON "cotizacion" ("subtotal") `);
        await queryRunner.query(`CREATE INDEX "IDX_061a0392f6d4a57ef352ac5fd2" ON "cotizacion" ("descuento") `);
        await queryRunner.query(`CREATE INDEX "IDX_c9d38e6915a432b12dfe5b13da" ON "cotizacion" ("total") `);
        await queryRunner.query(`CREATE TABLE "factura" ("id" SERIAL NOT NULL, "numero" integer NOT NULL, "clientName" character varying, "nit" character varying, "items" jsonb, "xml" text, "subtotal" integer NOT NULL, "descuento" integer NOT NULL, "total" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_393c240e12215225afd2d32eb4f" UNIQUE ("numero"), CONSTRAINT "PK_ca804984009ea42a7b46adb9a86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_393c240e12215225afd2d32eb4" ON "factura" ("numero") `);
        await queryRunner.query(`CREATE INDEX "IDX_3bc3b7080d5e8b29df6acc2fee" ON "factura" ("clientName") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d84001bbabca2564f13d7a174" ON "factura" ("nit") `);
        await queryRunner.query(`CREATE INDEX "IDX_9f980bea5efb593416923493ec" ON "factura" ("subtotal") `);
        await queryRunner.query(`CREATE INDEX "IDX_3424338b696621f13af8874a28" ON "factura" ("descuento") `);
        await queryRunner.query(`CREATE INDEX "IDX_4e1b9c3aed2daf2920da0b5039" ON "factura" ("total") `);
        await queryRunner.query(`CREATE TABLE "producto" ("id" SERIAL NOT NULL, "detalle" character varying, "codigoProducto" character varying, "codigoProductoSiat" character varying NOT NULL, "codigoUnidadMedida" character varying NOT NULL, "cantidad" integer NOT NULL, "precio" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b81449bd943da137055cb6bffb" ON "producto" ("detalle") `);
        await queryRunner.query(`CREATE INDEX "IDX_330f84bc5b342017cb02d3b813" ON "producto" ("codigoProducto") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dc18daa696860586ba4667a9d31" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "forgot" ADD CONSTRAINT "FK_31f3c80de0525250f31e23a9b83" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "forgot" DROP CONSTRAINT "FK_31f3c80de0525250f31e23a9b83"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dc18daa696860586ba4667a9d31"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_330f84bc5b342017cb02d3b813"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b81449bd943da137055cb6bffb"`);
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4e1b9c3aed2daf2920da0b5039"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3424338b696621f13af8874a28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f980bea5efb593416923493ec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d84001bbabca2564f13d7a174"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3bc3b7080d5e8b29df6acc2fee"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_393c240e12215225afd2d32eb4"`);
        await queryRunner.query(`DROP TABLE "factura"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9d38e6915a432b12dfe5b13da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_061a0392f6d4a57ef352ac5fd2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_27b31559fedc6d9e9bd64ea627"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5015c3f5e604cffd2c410417d2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_abfd1103df8e9fee038988e61d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d0d9025c56f5accfe6161a1b62"`);
        await queryRunner.query(`DROP TABLE "cotizacion"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_df507d27b0fb20cd5f7bef9b9a"`);
        await queryRunner.query(`DROP TABLE "forgot"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e282acb94d2e3aec10f480e4f6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f0e1b4ecdca13b177e2e3a0613"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58e4dbff0e1a32a9bdc861bb29"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9bd2fe7a8e694dedc4ec2f666f"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "file"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a722445847d37bb66f41e1c16"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f53395511a5b6d0df8e8f6c3b7"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }
}
exports.XmlAFACsjh1661762237009 = XmlAFACsjh1661762237009;
//# sourceMappingURL=1661762237009-XmlAFACsjh.js.map