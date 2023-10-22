import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'admin',
  },
      {
        username: 'miguelon',
        email: 'miguelonbellakitoflow@gmail.com',
        password: 'XxmiguelonxX',
      },
      {
        username: 'mcflurry',
        email: 'mcfly@gmail.com',
        password: 'mcfly',
      }
    ])
}
}
