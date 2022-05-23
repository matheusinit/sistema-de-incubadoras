import { Express, Router } from 'express'
import companyRoutes from './company.routes'
import invoiceRoutes from './invoice.routes'
import partnerRoutes from './partner.routes'
import userRoutes from './user.routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  companyRoutes(router)
  partnerRoutes(router)
  invoiceRoutes(router)
  userRoutes(router)
}
