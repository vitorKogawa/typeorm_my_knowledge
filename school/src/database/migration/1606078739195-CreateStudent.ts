import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudent1606078739195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'Student',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar(45)'
                },
                {
                    name: 'key',
                    type: 'varchar(45)'
                },
                {
                    name: 'created_At',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'update_At',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('Student')
    }

}
