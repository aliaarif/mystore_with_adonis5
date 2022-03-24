import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CitiesSchema extends BaseSchema {
    protected tableName = 'cities'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('country_id').unsigned().references('id').inTable('countries').onDelete('CASCADE')
            table.integer('state_id').unsigned().references('id').inTable('states').onDelete('CASCADE')
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
