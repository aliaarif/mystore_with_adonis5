import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import { string } from '@ioc:Adonis/Core/Helpers'

import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    await Category.createMany([
      {
        title: 'Sweets',
        slug: 'sweets',
        description: 'Dummy Description for Sweets Category'
      },
      {
        title: 'Vegitables',
        slug: 'vegitables',
        description: 'Dummy Description for Vegitables Category'
      },
      {
        title: 'Fast Food',
        slug: string.dashCase('Fast Food'),
        description: 'Dummy Description for Fast Food Category'
      },
    ])
  }
}
