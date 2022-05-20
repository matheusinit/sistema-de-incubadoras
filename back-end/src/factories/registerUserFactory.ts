import { RegisterUserController } from '../useCases/registerUser/RegisterUserController'
import { RegisterUserUsecase } from '../useCases/registerUser/RegisterUserUseCase'
import { Encrypter } from '../utils/Encrypter'

const encrypter = new Encrypter(12)
const registerUserUsecase = new RegisterUserUsecase(encrypter)
export const registerUserController = new RegisterUserController(registerUserUsecase)
