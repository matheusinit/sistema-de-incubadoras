import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanyTable1653045368699 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'company',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'cnpj',
          type: 'varchar'
        },
        {
          name: 'corporateName',
          type: 'varchar'
        },
        {
          name: 'tradeName',
          type: 'varchar'
        },
        {
          name: 'businessArea',
          type: 'varchar'
        },
        {
          name: 'timeInMarket',
          type: 'int'
        },
        {
          name: 'shareCapital',
          type: 'int'
        },
        {
          name: 'employeesCLTQuantity',
          type: 'int'
        },
        {
          name: 'outsorcedEmployeeQuantity',
          type: 'int'
        },
        {
          name: 'internQuantity',
          type: 'int'
        },
        {
          name: 'partnerQuantity',
          type: 'int'
        },
        {
          name: 'website',
          type: 'varchar'
        },
        {
          name: 'instagram',
          type: 'varchar'
        },
        {
          name: 'facebook',
          type: 'varchar'
        },
        {
          name: 'twitter',
          type: 'varchar'
        },
        {
          name: 'linkedin',
          type: 'varchar'
        },
        {
          name: 'whatsapp',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company')
  }
}
