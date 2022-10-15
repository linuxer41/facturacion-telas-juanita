import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class XmlAFA1661781356543 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
