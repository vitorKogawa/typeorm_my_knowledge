import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddColumnCreatedAtAndUpdateAtToLesson1606077826524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.addColumn('Lesson', new TableColumn({
            name: 'created_AT',
            type: 'timestamp',
            default: 'now()'
        }))

        queryRunner.addColumn('Lesson', new TableColumn({
            name: 'update_At',
            type: 'timestamp',
            default: 'now()'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn('Lesson', 'created_At')
        queryRunner.dropColumn('Lesson', 'update_At')
    }

}
