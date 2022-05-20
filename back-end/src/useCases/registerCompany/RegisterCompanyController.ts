import { Request, Response } from 'express'
import { RegisterCompanyUseCase } from './RegisterComapnyUsecase'

export class RegisterCompanyController {
  private readonly registerCompanyUsecase: RegisterCompanyUseCase

  constructor (registerCompanyUsecase: RegisterCompanyUseCase) {
    this.registerCompanyUsecase = registerCompanyUsecase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      await this.registerCompanyUsecase.handle(request.body)

      return response.sendStatus(200)
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error occured' })
    }
  }
}
