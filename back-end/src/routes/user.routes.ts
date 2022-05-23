import { Router } from 'express'
import { loginUserController } from '../factories/loginUserFactory'
import { auth } from '../middlewares/auth'
import { isAuthenticated } from '../middlewares/isAuthenticated'

export default (router: Router): void => {
  router.post('/session', auth, loginUserController.handle)

  router.get('/session', isAuthenticated, (request, response) => {
    try {
      return response.status(200).send({ message: 'You was authenticated...' })
    } catch (err) {
      return response.status(500).send({ error: 'Internal error occurred' })
    }
  })

  router.delete('/session', (request, response) => {
    request.logout()
    return response.sendStatus(200)
  })
}
