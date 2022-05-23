import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/User'

export const isAdmin = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
  if (request.user) {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy(request.user)

    if (user.isAdmin) {
      return next(null)
    }

    return response.status(403).send({ error: 'Forbidden' })
  }

  return response.status(401).send({ error: 'Needs authentication' })
}
