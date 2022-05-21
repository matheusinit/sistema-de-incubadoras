import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'
import { User } from '../../../entities/User'
import { Encrypter } from '../../../utils/Encrypter'

export class RegisterCompanyController {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async handle (request: Request, response: Response): Promise<Response> {
    const { password, ...companyData } = request.body

    const company = new Company()

    Object.assign(company, companyData)

    const user = new User()

    const encryptedPassword = this.encrypter.encrypt(password)

    Object.assign(user, { login: company.cnpj, password: encryptedPassword })

    await AppDataSource.manager.save(company)

    return response.status(200).json(company)
  }
}
