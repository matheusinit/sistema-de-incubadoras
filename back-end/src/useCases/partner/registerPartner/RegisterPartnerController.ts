import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'
import { Partner } from '../../../entities/Partner'

export class RegisterPartnerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, companyId } = request.body

    const companyRepository = AppDataSource.getRepository(Company)

    const company = await companyRepository.findOneBy({ id: companyId })

    const partner = new Partner()

    Object.assign(partner, { name, company })

    await AppDataSource.manager.save(partner)

    return response.status(200).json(partner)
  }
}
