import { Router } from 'express'
import { listCompanyController } from '../factories/listCompanyFactory'
import { registerCompanyController } from '../factories/registerCompanyFactory'

export default (router: Router): void => {
  router.get('/company', listCompanyController.handle)
  router.post('/company', registerCompanyController.handle)
}
