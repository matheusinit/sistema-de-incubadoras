import express from 'express'
import router from './routes/'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

router(app)

export default app
