import { Knex } from 'knex';

const tableName = 'categories';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.uuid('id', { primaryKey: true }).defaultTo('uuid_generate_v4()');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    t.string('name').notNullable();
    t.string('brand_id').references('id').inTable('brands').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
