import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Post from 'App/Models/Post'
import User from 'App/Models/User'
export default class CommentsController {
    public async index({response}: HttpContextContract) {
        const comments = await Comment.query().preload('user').preload('post')
        return response.status(200).json(comments)
    }
}
