"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('NestJS Food Court Demo API')
        .setContact('Damilola Dolor', 'https://0xdod.github.io', 'damiloladolor@gmail.com')
        .setDescription('NestJS Food Court Demo API Documentation')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map