import app from './app'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(async () => {
  app.listen(3000, () => console.log('Running...'))
}).catch(error => console.log(error))
