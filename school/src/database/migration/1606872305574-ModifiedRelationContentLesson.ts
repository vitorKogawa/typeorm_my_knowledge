import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifiedRelationContentLesson1606872305574 implements MigrationInterface {
    name = 'ModifiedRelationContentLesson1606872305574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "lessonId" TO "lessonIdAula"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" TO "UQ_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonIdAula"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonIdAula" integer`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_c0d889414be01c54b92238d72cd" UNIQUE ("lessonIdAula")`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_c0d889414be01c54b92238d72cd" FOREIGN KEY ("lessonIdAula") REFERENCES "lesson"("idAula") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_c0d889414be01c54b92238d72cd"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonIdAula"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonIdAula" uuid`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_c0d889414be01c54b92238d72cd" UNIQUE ("lessonIdAula")`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "UQ_c0d889414be01c54b92238d72cd" TO "UQ_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "lessonIdAula" TO "lessonId"`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "content"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
