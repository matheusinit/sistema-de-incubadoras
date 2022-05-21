import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'

export class ListCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const companyRepository = AppDataSource.getRepository(Company)

    const companies = await companyRepository.find()

    return response.status(200).json(companies)
  }
}
