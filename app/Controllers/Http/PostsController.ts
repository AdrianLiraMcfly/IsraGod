import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import User from 'App/Models/User'
export default class PostsController {
    public async index({response}: HttpContextContract) {
        const posts = await Post.query().preload('user')
        return response.status(200).json(posts)
    }

    public async getPost(ctx: HttpContextContract) {
        const post = await Post.findOrFail(ctx.params.id)
        return post
    }

    public async store({request, response}: HttpContextContract) {
        const user = await User.findOrFail(request.param('user_id'))
        const post = await Post.create(request.all())
        await post.related('user').associate(user)
        return response.status(201).json(post)
    }

    public async update({request, response}: HttpContextContract) {
        const post = await Post.findOrFail(request.param('id'))
        post.merge(request.all())
        await post.save()
        return response.status(200).json(post)
    }

    public async destroy({request, response}: HttpContextContract) {
        const post = await Post.findOrFail(request.param('id'))
        await post.delete()
        return response.status(204)
    }
}
