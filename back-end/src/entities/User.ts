import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  login: string

  @Column()
  password: string

  constructor () {
    this.id = uuidv4()
  }
}
