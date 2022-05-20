import { Company } from '../../entities/Company'
import { User } from '../../entities/User'
import { Encrypter } from '../../utils/Encrypter'
import { CompanyDTO } from './CompanyDTO'

export class RegisterCompanyUseCase {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async handle (companyDTO: CompanyDTO): Promise<void> {
    const { password, ...companyData } = companyDTO

    const company = new Company()

    Object.assign(company, companyData)

    await company.save()

    // Criar usuário de acesso para incubadora
    const user = new User()

    user.login = company.cnpj
    user.password = await this.encrypter.encrypt(password)

    await user.save()
  }
}
