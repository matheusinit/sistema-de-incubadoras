import 'reflect-metadata'
import { DataSource } from 'typeorm'
import env from './config/env'
import { User } from './entities/User'
import { CreateUserTable1653043138296 } from './config/database/migrations/1653043138296-CreateUserTable'
import { Company } from './entities/Company'
import { CreateCompanyTable1653045368699 } from './config/database/migrations/1653045368699-CreateCompanyTable'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: env.db_user,
  password: env.db_password,
  database: env.db_name,
  synchronize: true,
  logging: false,
  entities: [User, Company],
  migrations: [],
  migrationsTableName: 'migrations',
  subscribers: [CreateUserTable1653043138296, CreateCompanyTable1653045368699]
})
