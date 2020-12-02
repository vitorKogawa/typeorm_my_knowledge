import { Router } from 'express'

//importando os arquivos de rotas
import disciplineRouter from './discipline.routes'
import studentRoutes from './student.routes'

const routes = Router()

routes.use('/discipline', disciplineRouter)
routes.use('/student', studentRoutes)

export default routes