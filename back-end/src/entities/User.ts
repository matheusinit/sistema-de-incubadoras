import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  login: string = ''

  @Column()
  password: string = ''

  @Column()
  isAdmin: boolean = false

  @Column()
  isActivated: boolean = true

  constructor () {
    super()
    this.id = uuidv4()
  }
}
