import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsAlpha,
  Length,
} from 'class-validator';
import { ROLES } from '../../core/constants/role.enum';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsEnum(ROLES)
  @IsNotEmpty()
  role: ROLES;
}
