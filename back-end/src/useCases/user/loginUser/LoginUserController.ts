import { Request, Response } from 'express'

export class LoginUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { user } = request

    return response.status(200).json(user)
  }
}
