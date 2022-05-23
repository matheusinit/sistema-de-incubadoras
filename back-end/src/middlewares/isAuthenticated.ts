import { NextFunction, Request, Response } from 'express'

export const isAuthenticated = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
  if (request.isAuthenticated()) {
    return next(null)
  }

  return response.status(401).send({ error: 'Needs authentication' })
}
