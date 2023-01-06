import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBrandCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
