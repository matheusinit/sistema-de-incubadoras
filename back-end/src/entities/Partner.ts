import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Company } from './Company'

@Entity()
export class Partner {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @ManyToOne(() => Company, (company) => company.partners)
  company: Company

  constructor () {
    this.id = uuidv4()
  }
}
