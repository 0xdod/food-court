import { Global, Module } from '@nestjs/common';
import { User, MealAddon, Brand, Category } from './models';
import { knex } from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

const models = [User, MealAddon, Brand, Category];

const providers = [
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knexInstance = knex({
        client: 'pg',
        connection: {
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });
      Model.knex(knexInstance);
      return knexInstance;
    },
  },
  ...models.map((model) => ({ provide: model.name, useValue: model })),
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
