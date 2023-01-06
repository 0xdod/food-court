import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { UserDTO } from '../../user/dtos';

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LoginResponseDTO {
  user: UserDTO;
  token: string;
}
