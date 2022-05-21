import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUserTable1653151762713 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'login',
          type: 'varchar'
        },
        {
          name: 'password',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user')
  }
}
