"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const role_enum_1 = require("../../core/constants/role.enum");
const tableName = 'users';
async function up(knex) {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .createTable(tableName, (t) => {
        t.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
        t.string('email').notNullable().unique();
        t.string('password').notNullable();
        t.string('name').notNullable();
        t.enum('role', [role_enum_1.ROLE.ADMIN, role_enum_1.ROLE.USER]).notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(tableName);
}
exports.down = down;
//# sourceMappingURL=20230105134931_CreateUsers.js.map