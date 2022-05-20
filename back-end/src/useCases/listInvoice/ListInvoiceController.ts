import { Request, Response } from 'express'
import { Invoice } from '../../entities/Invoice'

export class ListInvoiceController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { companyCnpj } = request.params

    try {
      const invoices = await Invoice.find({
        where: {
          company: {
            cnpj: companyCnpj
          }
        }
      })

      return response.status(200).json(invoices)
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error occured' })
    }
  }
}
