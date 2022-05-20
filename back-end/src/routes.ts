import { Router } from 'express'
import { listCompanyController } from './factories/listCompanyFactory'
import { listInvoiceFactoryController } from './factories/listInvoiceFactory'
import { registerCompanyController } from './factories/registerCompanyFactory'
import { registerInvoiceController } from './factories/registerInvoiceFactory'

const router = Router()

router.post('/company', registerCompanyController.handle)
router.post('/invoice', registerInvoiceController.handle)

router.get('/company', listCompanyController.handle)
router.get('/invoice/:companyCnpj', listInvoiceFactoryController.handle)

export default router
