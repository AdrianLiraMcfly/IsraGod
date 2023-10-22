import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
export default class extends BaseSeeder {
  public async run () {
    await Post.createMany([
      {
      user_id: 1,
      title: 'admin',
      content: 'hola',
      },
      {
        user_id: 2,
        title: 'Las papas tambien son personas',
        content: 'No las comas',
      },
      {
        user_id: 3,
        title: 'cahuates pistaches',
        content: 'a cuanto la bolsa?',
      }
    ])
  }
}
