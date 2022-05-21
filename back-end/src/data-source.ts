import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'suetham',
  password: 'nodejs',
  database: 'bdl',
  synchronize: true,
  logging: false,
  entities: ['src/entities/*.ts'],
  migrations: ['src/**/migrations/*.ts'],
  subscribers: []
})
