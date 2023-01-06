import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateMealAddonDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string;

  //   @IsString()
  //   @IsOptional()
  //   createdBy: string;
}
