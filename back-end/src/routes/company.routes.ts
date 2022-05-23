import { Router } from 'express'
import { listCompanyController } from '../factories/listCompanyFactory'
import { registerCompanyController } from '../factories/registerCompanyFactory'
import { isAdmin } from '../middlewares/isAdmin'
import { isAuthenticated } from '../middlewares/isAuthenticated'

export default (router: Router): void => {
  router.get('/company', isAuthenticated, isAdmin, listCompanyController.handle)
  router.post('/company', registerCompanyController.handle)
}
