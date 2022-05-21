import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Invoice } from './Invoice'
import { Partner } from './Partner'

@Entity()
export class Company {
  @PrimaryColumn()
  id: string

  @Column()
  cnpj: string

  @OneToMany(() => Partner, (partner) => partner.company)
  partners: Partner[]

  @OneToMany(() => Invoice, (invoice) => invoice.company)
  invoices: Invoice[]

  @Column()
  corporateName: string

  @Column({ nullable: true })
  tradeName: string

  @Column()
  businessArea: string

  @Column({ nullable: true })
  timeInMarket: number

  @Column()
  shareCapital: number

  @Column({ nullable: true })
  employeesCLTQuantity: number

  @Column({ nullable: true })
  outsorcedEmployeeQuantity: number

  @Column({ nullable: true })
  internQuantity: number

  @Column()
  partnerQuantity: number

  @Column({ nullable: true })
  website: string

  @Column({ nullable: true })
  instagram: string

  @Column({ nullable: true })
  facebook: string

  @Column({ nullable: true })
  twitter: string

  @Column({ nullable: true })
  linkedin: string

  @Column({ nullable: true })
  whatsapp: string

  @Column()
  email: string

  constructor () {
    this.id = uuidv4()
  }
}
