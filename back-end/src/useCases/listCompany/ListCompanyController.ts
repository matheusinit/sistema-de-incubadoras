import { Company } from '../../entities/Company'
import { Request, Response } from 'express'

export class ListCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const companies = await Company.find()

      return response.status(200).json(companies)
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error occured' })
    }
  }
}
