import { Router } from 'express'

//importando os arquivos de rotas
import ClasseRoutes from './routes/class.routes'

const routes = Router()

routes.use('/class', ClasseRoutes)

export default routes