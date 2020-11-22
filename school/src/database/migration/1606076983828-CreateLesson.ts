import {
    MigrationInterface, 
    QueryRunner, 
    Table
} from "typeorm";

export class CreateLesson1606076983828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'Lesson',
                columns: [
                    {
                        name: 'idAula',
                        type: 'varchar(100)',
                        isPrimary: true
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
