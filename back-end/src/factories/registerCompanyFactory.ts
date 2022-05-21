import { RegisterCompanyController } from '../useCases/company/registerCompany/RegisterCompanyController'
import { Encrypter } from '../utils/Encrypter'

const encrypter = new Encrypter(12)
export const registerCompanyController = new RegisterCompanyController(encrypter)
