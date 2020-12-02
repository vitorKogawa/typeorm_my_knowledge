import { Router } from 'express'
import { getRepository } from 'typeorm'
import Discipline from '../database/entity/Discipline'

const disciplineRouter = Router()

disciplineRouter.post('/', async (request, response) => {
    try {
        const repository = getRepository(Discipline)
        const { name, duration } = request.body
        const newDiscipline = repository.create({ name, duration })
        await repository.save(newDiscipline)

        return response.json(newDiscipline)
    } catch (error) {
        return response.json(error)
    }
})

disciplineRouter.get('/', async (request, response) => {
    try {
        const repository = getRepository(Discipline)
        const all_disciplines = await repository.find({ cache: true })
        return response.json(all_disciplines)
    } catch (error) {
        return response.json(error)
    }
})


export default disciplineRouter