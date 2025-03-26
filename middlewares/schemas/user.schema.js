import Joi from 'joi'

const createUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    rol: Joi.string().required(),
    lenguaje: Joi.string().required()
})

export { createUserSchema }