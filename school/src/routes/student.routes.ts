import { Router } from 'express'
import { getRepository } from 'typeorm'
import { validate } from 'class-validator'
import Student from '../database/entity/Student'

const studentRouter = Router()

studentRouter.post('/', async (request, response) => {
    try {
        const repository = getRepository(Student)
        const {
            name,
            key,
            email
        } = request.body

        const newStudent = repository.create({
            name,
            key,
            email
        })

        const errors = await validate(newStudent)
        if(errors.length === 0){
            const studentValidated = await repository.save(newStudent)
            return response.status(201).json(studentValidated)
        }else{
            return response.status(400).json(errors.map(v => v.constraints))
        }
    } catch (error) {
        console.error("Error >> ", error)
        return response.status(500).send()
    }
})

export default studentRouter

