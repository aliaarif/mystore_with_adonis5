import { column, BaseModel, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

import Category from 'App/Models/Category'

export default class Product extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @hasOne(() => Category)
    public category: HasOne<typeof Category>

}
