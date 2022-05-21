import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateInvoiceTable1653160123273 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'invoice',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'month',
          type: 'int'
        },
        {
          name: 'year',
          type: 'int'
        },
        {
          name: 'companyId',
          type: 'varchar'
        },
        {
          name: 'total',
          type: 'int'
        }
      ]
    }))

    await queryRunner.createForeignKey('invoice', new TableForeignKey({
      columnNames: ['companyId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'company',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('invoice')
  }
}
