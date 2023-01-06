import { Knex } from 'knex';

const tableName = 'meal_addons';

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
      t.string('description').nullable();
      t.decimal('price', 10, 2).notNullable();
      t.string('category').nullable();
      t.uuid('brand_id').references('id').inTable('brands').notNullable();
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
