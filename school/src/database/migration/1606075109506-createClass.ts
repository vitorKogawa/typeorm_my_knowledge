import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateClass1606075109506 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'class',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'duration',
                        type: 'integer'
                    },
                    {
                        name: 'create_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'update_At',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('class')
    }

}
