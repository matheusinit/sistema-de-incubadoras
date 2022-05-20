import { User } from '../../entities/User'
import { Encrypter } from '../../utils/Encrypter'
import { UserDTO } from './UserDTO'

export class RegisterUserUsecase {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async handle (userDTO: UserDTO): Promise<void> {
    const encryptedPassword = await this.encrypter.encrypt(userDTO.password)

    const user = new User()

    user.login = userDTO.login
    user.password = encryptedPassword

    await user.save()
  }
}
