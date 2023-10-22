import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class UsersController {
    public async index({response}: HttpContextContract) {
        const users = await User.query()
        return response.status(200).json(users)
    }

    public async getUser(ctx: HttpContextContract) {
        if(user !== null) {
            return response.status(200).json(user)
        }
    }
}
