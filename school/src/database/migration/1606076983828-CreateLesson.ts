import {
    MigrationInterface, 
    QueryRunner, 
    Table
} from "typeorm";

export default class CreateLesson1606076983828 implements MigrationInterface {

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
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('Lesson')
    }

}
