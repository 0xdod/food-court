import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './core/core.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [DatabaseModule, CoreModule, BrandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
