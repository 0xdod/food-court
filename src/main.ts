import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { NODE_ENV } from './core/constants/env.enum';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  if (process.env.NODE_ENV === NODE_ENV.DEVELOPMENT) {
    setupSwagger(app);
  }
  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application listening on port :${port}`);
}
bootstrap();
