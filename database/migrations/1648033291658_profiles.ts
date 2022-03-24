import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
    protected tableName = 'profiles'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
            table.integer('country_id').unsigned().references('id').inTable('countries').onDelete('CASCADE')
            table.integer('state_id').unsigned().references('id').inTable('states').onDelete('CASCADE')
            table.integer('city_id').unsigned().references('id').inTable('cities').onDelete('CASCADE')
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
