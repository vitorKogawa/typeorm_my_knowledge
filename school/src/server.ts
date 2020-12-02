import * as express from 'express'
import routes from './routes/routes'
import './config/env'
import './database/index'

const server = express()
server.use(express.json())
server.use(routes)
const port = process.env.PORT || 3333

server.use('*', (request, response) => {
    response.send('<h1>Status: Online!</h1>')
})

server.listen(port, () => console.log('Servidor rodando 🔥 na porta: ', port))