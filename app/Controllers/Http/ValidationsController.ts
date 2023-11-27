import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class ValidationsController {
  public async createUser(ctx: HttpContextContract) {
        const data = await ctx.request.body()
        const user = new User()
        user.username = data.username
        user.email = data.email
        user.password = data.password
        user.confirmation_password = data.confirmation_password
        user.active = data.active
        await user.save()
        return ctx.response.status(201).json({data:{username: data.username}})
    
  }
}
