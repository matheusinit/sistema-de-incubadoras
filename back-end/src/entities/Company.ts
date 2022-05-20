import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Invoice } from './Invoice'

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  cnpj: string = ''

  // Razão social
  @Column()
  corporateName: string = ''

  // Nome fantasia
  @Column()
  tradeName: string = ''

  // Área de atuação
  @Column()
  businessArea: string = ''

  // Tempo de mercado (em meses)
  @Column()
  timeInMarket: number = 0

  // Capital social
  @Column()
  shareCapital: number = 0

  // Quantidade de empregados CLT
  @Column()
  employeesCLTQuantity: number = 0

  // Quantidade de empregados tercerizados
  @Column()
  outsorcedEmployeeQuantity: number = 0

  // Quantidade de estagiários
  @Column()
  internQuantity: number = 0

  // Quantidade de sócio
  @Column()
  partnerQuantity: number = 0

  // Sócios (um-pra-muitos)
  @Column()
  partners = ''

  // Contatos
  @Column()
  website: string = ''

  @Column()
  instagram: string = ''

  @Column()
  facebook: string = ''

  @Column()
  twitter: string = ''

  @Column()
  linkedin: string = ''

  @Column()
  whatsapp: string = ''

  @Column()
  email: string = ''

  @OneToMany(() => Invoice, (invoice) => invoice.company)
  invoices?: Invoice[]

  constructor () {
    super()
    this.id = uuidv4()
  }
}
