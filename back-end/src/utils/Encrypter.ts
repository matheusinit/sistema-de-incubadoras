import bcrypt from 'bcrypt'

export class Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (data: string): Promise<string> {
    return await bcrypt.hash(data, this.salt)
  }

  async compare (hash: string, data: string): Promise<boolean> {
    return await bcrypt.compare(data, hash)
  }
}
