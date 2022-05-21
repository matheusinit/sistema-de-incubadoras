import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreatePartnerTable1653157585252 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'partner',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'companyId',
          type: 'varchar'
        },
        {
          name: 'name',
          type: 'varchar'
        }
      ]
    }))

    await queryRunner.createForeignKey('partner', new TableForeignKey({
      columnNames: ['companyId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'company',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('partner')
  }
}
