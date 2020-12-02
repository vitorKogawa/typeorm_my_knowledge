import { Router } from 'express'
import { getConnection, getRepository } from 'typeorm'
import Discipline from '../database/entity/Discipline'

const disciplineRouter = Router()

disciplineRouter.post('/', async (request, response) => {
    try {
        const repository = getRepository(Discipline)
        const { name, duration } = request.body
        const newDiscipline = repository.create({ name, duration })
        await repository.save(newDiscipline)

        //removendo cache ao inserir dados. para limpar a cache de querys da base de dados basta rodar o comando: npm run typeorm cache:clear
        //com isso ele não vai mais demorar para mostrar os dados para o usuários que está realizando a requisição para a base de dados.
        await getConnection().queryResultCache.remove(['listDiscipline'])

        return response.json(newDiscipline)
    } catch (error) {
        return response.json(error)
    }
})

disciplineRouter.get('/', async (request, response) => {
    try {
        const repository = getRepository(Discipline)
        //implementando o sistema de cache de querys , isso ajuda a diminuir o número de consultas repetitivas no banco
        const all_disciplines = await repository.find({
            cache: {
                id: 'listDiscipline',
                milliseconds: 10000,
            }
        })
        return response.json(all_disciplines)
    } catch (error) {
        return response.json(error)
    }
})


export default disciplineRouter