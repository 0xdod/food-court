"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("./models");
const knex_1 = require("knex");
const objection_1 = require("objection");
const models = [models_1.User, models_1.MealAddon, models_1.Brand, models_1.Category];
const providers = [
    {
        provide: 'KnexConnection',
        useFactory: async () => {
            const knexInstance = (0, knex_1.knex)(Object.assign({ client: 'pg', connection: {
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                }, debug: process.env.KNEX_DEBUG === 'true' }, (0, objection_1.knexSnakeCaseMappers)()));
            objection_1.Model.knex(knexInstance);
            return knexInstance;
        },
    },
    ...models.map((model) => ({ provide: model.name, useValue: model })),
];
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [...providers],
        exports: [...providers],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map