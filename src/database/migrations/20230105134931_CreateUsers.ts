import { Knex } from 'knex';
import { ROLE } from '../../core/constants/role.enum';

const tableName = 'users';

export async function up(knex: Knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable(tableName, (t) => {
      t.uuid('id', { primaryKey: true }).defaultTo(
        knex.raw('uuid_generate_v4()'),
      );
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.string('email').notNullable().unique();
      t.string('password').notNullable();
      t.string('name').notNullable();
      t.enum('role', [ROLE.ADMIN, ROLE.USER]).notNullable();
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
