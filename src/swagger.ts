import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('NestJS Food Court Demo API')
    .setContact(
      'Damilola Dolor',
      'https://0xdod.github.io',
      'damiloladolor@gmail.com',
    )
    .setDescription('NestJS Food Court Demo API Documentation')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
