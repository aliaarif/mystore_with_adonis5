import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { beforeSave, column, BaseModel, hasOne, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Country from 'App/Models/Country'
import State from 'App/Models/State'
import City from 'App/Models/City'

import Setting from 'App/Models/Setting'

import Profile from 'App/Models/Profile'
import Post from 'App/Models/Post'


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: number

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => Country)
  public country: HasOne<typeof Country>

  @hasOne(() => State)
  public state: HasOne<typeof State>

  @hasOne(() => City)
  public city: HasOne<typeof City>

  @hasOne(() => Setting)
  public setting: HasOne<typeof Setting>

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>

}
