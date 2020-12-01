import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedEntitys1606281243322 implements MigrationInterface {
    name = 'CreatedEntitys1606281243322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(250) NOT NULL, "linkContent" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "lessonIdAula" integer, CONSTRAINT "REL_c0d889414be01c54b92238d72c" UNIQUE ("lessonIdAula"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson" ("idAula" SERIAL NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "classeId" uuid, CONSTRAINT "PK_aedb92377a845335bc4d9f30d22" PRIMARY KEY ("idAula"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "duration" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name"), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "key" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_c0d889414be01c54b92238d72cd" FOREIGN KEY ("lessonIdAula") REFERENCES "lesson"("idAula") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f8129e3c7eacda851f01f054f96" FOREIGN KEY ("classeId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f8129e3c7eacda851f01f054f96"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
