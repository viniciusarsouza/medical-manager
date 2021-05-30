import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDoctors1622308060742 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doctors',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'crm',
                        type: 'integer',
                        isUnique: true,
                    },
                    {
                        name: 'landline',
                        type: 'integer',
                    },
                    {
                        name: 'cellphone',
                        type: 'integer',
                    },
                    {
                        name: 'cep',
                        type: 'integer',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctors');
    }
}
