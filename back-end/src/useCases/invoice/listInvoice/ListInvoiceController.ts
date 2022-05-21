import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Invoice } from '../../../entities/Invoice'

export class ListInvoiceController {
  async handle (request: Request, response: Response): Promise<Response> {
    const invoiceRepository = AppDataSource.getRepository(Invoice)

    const invoices = await invoiceRepository.find()

    return response.status(200).json(invoices)
  }
}
