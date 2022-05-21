import { Request, Response } from 'express'
import { AppDataSource } from '../../../data-source'
import { Partner } from '../../../entities/Partner'

export class ListPartnerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const partnerRepository = AppDataSource.getRepository(Partner)

    const partners = await partnerRepository.find()

    return response.status(200).json(partners)
  }
}
