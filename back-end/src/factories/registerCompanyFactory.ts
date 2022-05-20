import { RegisterCompanyController } from '../useCases/registerCompany/RegisterCompanyController'
import { RegisterCompanyUseCase } from '../useCases/registerCompany/RegisterComapnyUsecase'
import { Encrypter } from '../utils/Encrypter'

const encrypter = new Encrypter(12)
const registerComapanyUsecase = new RegisterCompanyUseCase(encrypter)
export const registerCompanyController = new RegisterCompanyController(registerComapanyUsecase)
