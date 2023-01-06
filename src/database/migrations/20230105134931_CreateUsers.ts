import { table } from 'console';
import { Knex } from 'knex';
import { ROLES } from '../../core/constants/role.enum';

const tableName = 'users';

//

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
      t.enum('role', [ROLES.ADMIN, ROLES.USER]).notNullable();
      t.string('created_by').notNullable();
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
