import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100).notNullable()
      table.string('email', 100).notNullable().unique()
      table.string('phone', 100).notNullable().unique()
      table.string('username', 100).notNullable().unique()
      table.string('password', 100).notNullable()
      table.string('remember_me_token').nullable()
      table.dateTime("created_by").defaultTo(null);
      table.dateTime("updated_by").defaultTo(null);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
