import app from './app'
import env from './config/env'

app.listen(env.port, () => console.log(`Server started at http://localhost:${env.port}`))
