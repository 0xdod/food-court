"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const objection_1 = require("objection");
module.exports = Object.assign({ client: 'pg', connection: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }, migrations: {
        directory: process.env.DB_MIGRATIONS_DIR,
        stub: process.env.DB_MIGRATIONS_STUB,
    }, seeds: {
        directory: process.env.DB_SEEDS_DIR,
        stub: process.env.DB_SEEDS_STUB,
    } }, (0, objection_1.knexSnakeCaseMappers)());
//# sourceMappingURL=knexfile.js.map