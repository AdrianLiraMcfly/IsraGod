import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title', 255).notNullable()
      table.text('content').notNullable()
      table.timestamp('created_at', { useTz: true })
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
