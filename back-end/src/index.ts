import { AppDataSource } from './data-source'
import express from 'express'
import router from './routes'

const app = express()

app.use(express.json())

app.use('/api', router)

AppDataSource.initialize().then(async () => {
  app.listen(3000, () => console.log('Running...'))
}).catch(error => console.log(error))
