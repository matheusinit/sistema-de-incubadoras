import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'

export class RegisterCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const company = new Company()

    Object.assign(company, request.body)

    await AppDataSource.manager.save(company)

    return response.status(200).json(company)
  }
}
