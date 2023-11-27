import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Post from 'App/Models/Post'
import User from 'App/Models/User'
export default class CommentsController {
    public async index({response}: HttpContextContract) {
        const comments = await Comment.query().preload('user').preload('post')
        return response.status(200).json(comments)
    }
        public async getComment(ctx: HttpContextContract) {
            const comment = await Comment.findOrFail(ctx.params.id)
            return comment
        }
        public async store({request, response}: HttpContextContract) {
            const user = await User.findOrFail(request.param('user_id'))
            const post = await Post.findOrFail(request.param('post_id'))
            const comment = await Comment.create(request.all())
            await comment.related('user').associate(user)
            await comment.related('post').associate(post)
            return response.status(201).json(comment)
        }
        public async update({request, response}: HttpContextContract) {
            const comment = await Comment.findOrFail(request.param('id'))
            comment.merge(request.all())
            await comment.save()
            return response.status(200).json(comment)
        }
        public async destroy({request, response}: HttpContextContract) {
            const comment = await Comment.findOrFail(request.param('id'))
            await comment.delete()
            return response.status(204)
        }
    }
