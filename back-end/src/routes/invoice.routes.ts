import { Router } from 'express'
import { listInvoiceByCompanyController } from '../factories/listInvoiceByCompanyFactory'
import { listInvoiceByMonthAndYearController } from '../factories/listInvoiceByMonthAndYearFactory'
import { listInvoiceByYearController } from '../factories/listInvoiceByYearFactory'
import { listInvoiceController } from '../factories/listInvoiceFactory'
import { registerInvoiceController } from '../factories/registerInvoiceFactory'

export default (router: Router): void => {
  router.get('/invoice', listInvoiceController.handle)
  router.get('/invoice/year/:year', listInvoiceByYearController.handle)
  router.get('/invoice/:month/:year', listInvoiceByMonthAndYearController.handle)
  router.get('/invoice/company/:companyId', listInvoiceByCompanyController.handle)
  router.post('/invoice', registerInvoiceController.handle)
}
