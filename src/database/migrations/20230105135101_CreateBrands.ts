import { Knex } from 'knex';

const tableName = 'brands';

export async function up(knex: Knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable(tableName, (t) => {
      t.uuid('id', { primaryKey: true }).defaultTo(
        knex.raw('uuid_generate_v4()'),
      );
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.string('name').notNullable();
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
