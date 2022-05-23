import express from 'express'
import router from './routes/'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'

const app = express()

app.use(express.json())
app.use(session({ secret: 'password' }))
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

router(app)

export default app
