import { Request, Response, Router } from 'express'
import { getRepository } from 'typeorm'
import Class from '../database/entity/Class'

const classRouter = Router()

classRouter.post('/', async (request: Request, response: Response) => {
    try {
        const repository = getRepository(Class)
        const { name, duration } = request.body
        const newClass = repository.create({ name, duration })
        await repository.save(newClass)

        return response.json(newClass)
    } catch (error) {
        return response.json(error)
    }
})

classRouter.get('/', async (request: Request, response: Response) => {
    try {
        const repository = getRepository(Class)
        const all_clases = await repository.find()
        return response.json(all_clases)
    } catch (error) {
        return response.json(error)
    }
})


export default classRouter