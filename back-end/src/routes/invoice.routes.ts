import { Router } from 'express'
import { listInvoiceByCompanyController } from '../factories/listInvoiceByCompanyFactory'
import { listInvoiceByMonthAndYearController } from '../factories/listInvoiceByMonthAndYearFactory'
import { listInvoiceByYearController } from '../factories/listInvoiceByYearFactory'
import { listInvoiceController } from '../factories/listInvoiceFactory'
import { registerInvoiceController } from '../factories/registerInvoiceFactory'
import { isAdmin } from '../middlewares/isAdmin'
import { isAuthenticated } from '../middlewares/isAuthenticated'

export default (router: Router): void => {
  router.get('/invoice', isAuthenticated, isAdmin, listInvoiceController.handle)
  router.get('/invoice/company/:companyId', isAuthenticated, isAdmin, listInvoiceByCompanyController.handle)
  router.get('/invoice/year/:year', isAuthenticated, isAdmin, listInvoiceByYearController.handle)
  router.get('/invoice/:month/:year', isAuthenticated, isAdmin, listInvoiceByMonthAndYearController.handle)
  router.post('/invoice', registerInvoiceController.handle)
}
