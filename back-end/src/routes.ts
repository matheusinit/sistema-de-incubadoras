import { Router } from 'express'
import { listCompanyController } from './factories/listCompanyFactory'
import { listInvoiceByCompanyController } from './factories/listInvoiceByCompanyFactory'
import { listInvoiceController } from './factories/listInvoiceFactory'
import { listPartnerByCompanyController } from './factories/listPartnerByCompanyFactory'
import { listPartnerController } from './factories/listPartnerFactory'
import { registerCompanyController } from './factories/registerCompanyFactory'
import { registerInvoiceController } from './factories/registerInvoiceFactory'
import { registerPartnerController } from './factories/registerPartnerFactory'

const router = Router()

router.get('/partner', listPartnerController.handle)
router.get('/partner/:companyId', listPartnerByCompanyController.handle)
router.post('/partner', registerPartnerController.handle)

router.get('/company', listCompanyController.handle)
router.post('/company', registerCompanyController.handle)

router.get('/invoice', listInvoiceController.handle)
router.get('/invoice/:companyId', listInvoiceByCompanyController.handle)
router.post('/invoice', registerInvoiceController.handle)

export default router
