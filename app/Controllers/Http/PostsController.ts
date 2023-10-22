import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import User from 'App/Models/User'
export default class PostsController {
    public async index({response}: HttpContextContract) {
        const posts = await Post.query().preload('user')
        return response.status(200).json(posts)
    }
}
