import { Router } from 'express'
import { listInvoiceByCompanyController } from '../factories/listInvoiceByCompanyFactory'
import { listInvoiceController } from '../factories/listInvoiceFactory'
import { registerInvoiceController } from '../factories/registerInvoiceFactory'

export default (router: Router): void => {
  router.get('/invoice', listInvoiceController.handle)
  router.get('/invoice/:companyId', listInvoiceByCompanyController.handle)
  router.post('/invoice', registerInvoiceController.handle)
}
