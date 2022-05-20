import { hash } from 'bcrypt'

export class Encrypter {
  salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (data: string): Promise<string> {
    return await hash(data, this.salt)
  }
}
