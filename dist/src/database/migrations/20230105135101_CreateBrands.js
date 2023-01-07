"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const tableName = 'brands';
async function up(knex) {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .createTable(tableName, (t) => {
        t.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
        t.string('name').notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(tableName);
}
exports.down = down;
//# sourceMappingURL=20230105135101_CreateBrands.js.map