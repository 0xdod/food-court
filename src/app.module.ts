import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './core/core.module';
import { BrandModule } from './brand/brand.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, CoreModule, BrandModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
