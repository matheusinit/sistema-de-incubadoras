import { Router } from 'express'
import { listPartnerByCompanyController } from '../factories/listPartnerByCompanyFactory'
import { listPartnerController } from '../factories/listPartnerFactory'
import { registerPartnerController } from '../factories/registerPartnerFactory'

export default (router: Router): void => {
  router.get('/partner', listPartnerController.handle)
  router.get('/partner/:companyId', listPartnerByCompanyController.handle)
  router.post('/partner', registerPartnerController.handle)
}
