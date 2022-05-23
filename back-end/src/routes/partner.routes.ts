import { Router } from 'express'
import { listPartnerByCompanyController } from '../factories/listPartnerByCompanyFactory'
import { listPartnerController } from '../factories/listPartnerFactory'
import { registerPartnerController } from '../factories/registerPartnerFactory'
import { isAdmin } from '../middlewares/isAdmin'
import { isAuthenticated } from '../middlewares/isAuthenticated'

export default (router: Router): void => {
  router.get('/partner', isAuthenticated, isAdmin, listPartnerController.handle)
  router.get('/partner/:companyId', isAuthenticated, isAdmin, listPartnerByCompanyController.handle)
  router.post('/partner', registerPartnerController.handle)
}
