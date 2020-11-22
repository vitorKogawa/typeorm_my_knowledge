import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnCreatedAtAndUpdatedAtToStudent1606084181706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('Student', new TableColumn({
            name: 'created_At',
            type: 'timestamp',
            default: 'now()'
        }))

        await queryRunner.addColumn('Student', new TableColumn({
            name: 'updated_At',
            type: 'timestamp',
            default: 'now()'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('Student', 'crated_At')
        await queryRunner.dropColumn('Student', 'updated_At')
    }

}
