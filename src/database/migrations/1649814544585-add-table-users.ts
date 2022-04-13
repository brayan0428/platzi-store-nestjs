import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableUsers1649814544585 implements MigrationInterface {
    name = 'addTableUsers1649814544585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "rol" character varying(50) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
