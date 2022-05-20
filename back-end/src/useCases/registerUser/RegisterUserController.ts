import { Request, Response } from 'express'
import { RegisterUserUsecase } from './RegisterUserUseCase'

export class RegisterUserController {
  private readonly registerUserUsecase: RegisterUserUsecase

  constructor (registerUserUsecase: RegisterUserUsecase) {
    this.registerUserUsecase = registerUserUsecase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { login, password } = request.body

      if (!login) {
        return response.status(400).json({ error: 'Login not provided' })
      }

      if (!password) {
        return response.status(400).json({ error: 'Password not provided' })
      }

      await this.registerUserUsecase.handle({ login, password })

      return response.sendStatus(200)
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error occured' })
    }
  }
}
