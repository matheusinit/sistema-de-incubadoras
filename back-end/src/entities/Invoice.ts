import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Company } from './Company'

@Entity()
export class Invoice {
  @PrimaryColumn()
  id: string

  @Column()
  month: number

  @Column()
  year: number

  @ManyToOne(() => Company, (company) => company.invoices)
  company: Company

  @Column()
  total: number

  constructor () {
    this.id = uuidv4()
  }
}
