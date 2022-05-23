import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Invoice } from '../../../entities/Invoice'

export class ListInvoiceByYearController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { year } = request.params

    const invoiceRepository = AppDataSource.getRepository(Invoice)

    const invoices = await invoiceRepository.findBy({ year: Number(year) })

    return response.status(200).json(invoices)
  }
}
