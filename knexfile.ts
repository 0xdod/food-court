import 'dotenv/config';
import * as Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';

module.exports = Knex.knex({
  client: 'pg',
  //connection: process.env.DATABASE_URL,
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: process.env.DB_MIGRATIONS_DIR,
    stub: process.env.DB_MIGRATIONS_STUB,
  },
  seeds: {
    directory: process.env.DB_SEEDS_DIR,
    stub: process.env.DB_SEEDS_STUB,
  },
  ...knexSnakeCaseMappers(),
});
