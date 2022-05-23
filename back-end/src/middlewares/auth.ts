import passport from 'passport'
import { Strategy } from 'passport-local'
import { AppDataSource } from '../data-source'
import { User } from '../entities/User'
import { Encrypter } from '../utils/Encrypter'

passport.use(new Strategy({ usernameField: 'login', session: true }, async (login, password, done) => {
  try {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ login })

    const encrypter = new Encrypter(12)

    if (!user) {
      return done(null, false)
    }

    const isPasswordVerified = await encrypter.compare(user.password, password)

    if (!isPasswordVerified) {
      return done(null, false)
    }

    return done(null, user)
  } catch (err) {
    return done(err)
  }
}))

passport.serializeUser((user: User, done) => {
  process.nextTick(() => {
    done(null, { id: user.id })
  })
})

passport.deserializeUser((user: User, done) => {
  process.nextTick(() => {
    return done(null, user)
  })
})

export const auth = passport.authenticate('local', { session: true })
