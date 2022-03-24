import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
    protected tableName = 'posts'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('title', 100)
            table.string('slug', 100)
            table.string('body', 200)
            table.dateTime("created_by").defaultTo(null)
            table.dateTime("updated_by").defaultTo(null)
            table.dateTime("deleted_at").defaultTo(null)
            table.timestamps()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
