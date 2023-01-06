import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateMealAddonDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string;
}
