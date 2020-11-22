import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateContent1606077430211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'Content',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar(100)',
                        isPrimary: true
                    },
                    {
                        name: 'description',
                        type: 'varchar(250)'
                    },
                    {
                        name: 'linkContent',
                        type: 'varchar(45)'
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
        queryRunner.dropTable('Content')
    }

}
