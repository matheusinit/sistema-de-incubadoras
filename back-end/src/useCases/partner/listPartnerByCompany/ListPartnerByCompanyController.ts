import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'
import { Partner } from '../../../entities/Partner'

export class ListPartnerByCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { companyId } = request.params

    const companyRepository = AppDataSource.getRepository(Company)

    const company = await companyRepository.findOneBy({ id: companyId })

    const partnerRepository = AppDataSource.getRepository(Partner)

    const partners = await partnerRepository.findBy({ company })

    return response.status(200).json(partners)
  }
}
