import { Request, Response } from 'express'
import { Company } from '../../entities/Company'
import { Invoice } from '../../entities/Invoice'

export class RegisterInvoiceController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { cnpj, month, total } = request.body

      if (!cnpj) {
        return response.status(400).json({ error: 'CNPJ not provided' })
      }

      if (!month) {
        return response.status(400).json({ error: 'Month not provided' })
      }

      if (!total) {
        return response.status(400).json({ error: 'Total not provided' })
      }

      const company = await Company.findOneBy({ cnpj }) as Company

      const invoice = new Invoice()

      Object.assign(invoice, { cnpj, month, total, company })

      return response.sendStatus(200)
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error occured' })
    }
  }
}
