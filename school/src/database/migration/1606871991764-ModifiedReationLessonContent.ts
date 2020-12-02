import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifiedReationLessonContent1606871991764 implements MigrationInterface {
    name = 'ModifiedReationLessonContent1606871991764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "lessonIdAula" TO "lessonId"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "REL_c0d889414be01c54b92238d72c" TO "UQ_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonId"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" UNIQUE ("lessonId")`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "content"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonId"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonId" integer`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" UNIQUE ("lessonId")`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" TO "REL_c0d889414be01c54b92238d72c"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "lessonId" TO "lessonIdAula"`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_c0d889414be01c54b92238d72cd" FOREIGN KEY ("lessonIdAula") REFERENCES "lesson"("idAula") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
