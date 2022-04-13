import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieldsProductEntity1649800942926 implements MigrationInterface {
    name = 'addFieldsProductEntity1649800942926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "createdAt"`);
    }

}
