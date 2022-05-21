import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanyTable1653154436810 implements MigrationInterface {
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
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'businessArea',
          type: 'varchar'
        },
        {
          name: 'timeInMarket',
          type: 'int',
          isNullable: true
        },
        {
          name: 'shareCapital',
          type: 'int'
        },
        {
          name: 'employeesCLTQuantity',
          type: 'int',
          isNullable: true
        },
        {
          name: 'outsorcedEmployeeQuantity',
          type: 'int',
          isNullable: true
        },
        {
          name: 'internQuantity',
          type: 'int',
          isNullable: true
        },
        {
          name: 'partnerQuantity',
          type: 'int'
        },
        {
          name: 'website',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'instagram',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'facebook',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'twitter',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'linkedin',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'whatsapp',
          type: 'varchar',
          isNullable: true
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
