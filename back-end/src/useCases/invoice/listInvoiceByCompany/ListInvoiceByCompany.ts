import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Company } from '../../../entities/Company'
import { Invoice } from '../../../entities/Invoice'

export class ListInvoiceByCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { companyId } = request.params

    const companyRepository = AppDataSource.getRepository(Company)

    const company = await companyRepository.findOneBy({ id: companyId })

    const invoiceRepository = AppDataSource.getRepository(Invoice)

    const invoices = await invoiceRepository.findBy({ company })

    return response.status(200).json(invoices)
  }
}
