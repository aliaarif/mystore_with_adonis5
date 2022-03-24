import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CountriesSchema extends BaseSchema {
    protected tableName = 'countries'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name', 100).notNullable()
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
