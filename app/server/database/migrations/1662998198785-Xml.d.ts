import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Xml1662998198785 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
