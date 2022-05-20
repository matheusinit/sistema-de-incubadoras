import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Company } from './Company'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @ManyToOne(() => Company, (company) => company.invoices)
  company?: Company

  @Column()
  total: number = 0

  @Column()
  month: string = ''

  constructor () {
    this.id = uuidv4()
  }
}
