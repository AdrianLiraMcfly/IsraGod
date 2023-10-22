import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class extends BaseSeeder {
  public async run () {
    await Comment.createMany([
      {
      user_id: 1,
      post_id: 1,
      content: 'simon',
      },
      {
        user_id: 2,
        post_id: 2,
        content: 'simon al cuadrado',
      },
      {
        user_id: 3,
        post_id: 3,
        content: 'simon al cubo',
      }
    ])
  }
}
