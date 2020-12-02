import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedEntites1606875691445 implements MigrationInterface {
    name = 'CreatedEntites1606875691445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "discipline" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "duration" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ba7f210baab523048c0386c3463" UNIQUE ("name"), CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson" ("idAula" SERIAL NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "disciplineId" uuid, CONSTRAINT "PK_aedb92377a845335bc4d9f30d22" PRIMARY KEY ("idAula"))`);
        await queryRunner.query(`CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(250) NOT NULL, "linkContent" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "lessonIdAula" integer, CONSTRAINT "REL_c0d889414be01c54b92238d72c" UNIQUE ("lessonIdAula"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "key" character varying(45) NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_classes_discipline" ("studentId" integer NOT NULL, "disciplineId" uuid NOT NULL, CONSTRAINT "PK_ae29bdc596857970c6afaac158c" PRIMARY KEY ("studentId", "disciplineId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_43b397ad22c4ac3c3887307fb2" ON "student_classes_discipline" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c31d2c4640472f3e1f8776864f" ON "student_classes_discipline" ("disciplineId") `);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_2652456e912c983cde73d3281db" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_c0d889414be01c54b92238d72cd" FOREIGN KEY ("lessonIdAula") REFERENCES "lesson"("idAula") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_classes_discipline" ADD CONSTRAINT "FK_43b397ad22c4ac3c3887307fb2e" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_classes_discipline" ADD CONSTRAINT "FK_c31d2c4640472f3e1f8776864f9" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_classes_discipline" DROP CONSTRAINT "FK_c31d2c4640472f3e1f8776864f9"`);
        await queryRunner.query(`ALTER TABLE "student_classes_discipline" DROP CONSTRAINT "FK_43b397ad22c4ac3c3887307fb2e"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_2652456e912c983cde73d3281db"`);
        await queryRunner.query(`DROP INDEX "IDX_c31d2c4640472f3e1f8776864f"`);
        await queryRunner.query(`DROP INDEX "IDX_43b397ad22c4ac3c3887307fb2"`);
        await queryRunner.query(`DROP TABLE "student_classes_discipline"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "content"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "discipline"`);
    }

}
