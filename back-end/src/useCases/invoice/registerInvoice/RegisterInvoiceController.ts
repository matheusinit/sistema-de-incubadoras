import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'
import { Invoice } from '../../../entities/Invoice'

export class RegisterInvoiceController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { month, year, total, companyId } = request.body

    const companyRepository = AppDataSource.getRepository(Company)

    const company = await companyRepository.findOneBy({ id: companyId })

    const invoice = new Invoice()

    Object.assign(invoice, { month, year, total, company })

    await AppDataSource.manager.save(invoice)

    return response.status(200).json(invoice)
  }
}
