import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory
    .define(User, ({ faker }) => {
        return {
            name: faker.internet.name(),
            email: faker.internet.email(),
            phone: faker.internet.phone(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
        }
    })
    .build()

