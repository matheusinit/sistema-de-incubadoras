import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { User } from '../../../entities/User'
import { v4 as uuidv4 } from 'uuid'

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
        },
        {
          name: 'isAdmin',
          type: 'boolean'
        }
      ]
    }))

    await queryRunner.manager.createQueryBuilder().insert().into(User).values({
      id: uuidv4(),
      login: 'admin',
      password: 'password',
      isAdmin: true
    }).execute()
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user')
  }
}
