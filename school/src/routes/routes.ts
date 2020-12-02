import { Router } from 'express'

//importando os arquivos de rotas
import classeRoutes from './class.routes'
import studentRoutes from './student.routes'

const routes = Router()

routes.use('/class', classeRoutes)
routes.use('/student', studentRoutes)

export default routes