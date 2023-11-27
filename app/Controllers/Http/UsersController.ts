import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
    public async index({response}: HttpContextContract) {
        const users = await User.query()
        return response.status(200).json(users)
    }

    public async getUser(ctx: HttpContextContract) {
        const user = await User.findOrFail(ctx.params.id)
        return user
    }

    public async store({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateUserValidator)
        const user = await User.create(payload)
        await user.save()
        return response.status(201).json(user)
    }

    public async update({request, response}: HttpContextContract) {
        const user = await User.findOrFail(request.param('id'))
        user.merge(request.all())
        await user.save()
        return response.status(200).json(user)
    }

    public async destroy({request, response}: HttpContextContract) {
        const user = await User.findOrFail(request.param('id'))
        user.active = false
        await user.save()
        return response.status(204)
    }

    public async getOne({request, response}: HttpContextContract) {
        const user = await User.findOrFail(request.param('id'))
        return response.status(200).json(user)
    }
}