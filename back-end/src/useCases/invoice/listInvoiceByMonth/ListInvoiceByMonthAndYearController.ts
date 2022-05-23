import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Invoice } from '../../../entities/Invoice'

export class ListInvoiceByMonthAndYearController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { month, year } = request.params

    const invoiceRepository = AppDataSource.getRepository(Invoice)

    const invoices = await invoiceRepository.findBy({ month: Number(month), year: Number(year) })

    return response.status(200).json(invoices)
  }
}
