import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'
import { User } from '../../../entities/User'
import bcrypt from 'bcrypt'

export class RegisterCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { password, ...companyData } = request.body

    const company = new Company()

    Object.assign(company, companyData)

    const user = new User()

    const encryptedPassword = await bcrypt.hash(password, 12)

    Object.assign(user, { login: company.cnpj, password: encryptedPassword })

    await AppDataSource.manager.save(company)
    await AppDataSource.manager.save(user)

    return response.status(200).json(company)
  }
}
