import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { User } from '../database/models';
import { LoginDTO, RegisterDTO } from './dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(User.name)
    private readonly userModel: ModelClass<User>,
  ) {}

  async login(loginDto: LoginDTO) {
    const { email, password } = loginDto;
    const user = await this.userModel
      .query()
      .whereRaw('LOWER(email) = LOWER(?)', email)
      .first();
    if (!user) {
      throw new ConflictException('Invalid credentials');
    }
    const isPasswordValid = await this.validateUserPassword(user, password);

    if (!isPasswordValid) {
      throw new ConflictException('Invalid credentials');
    }
    // TODO: Generate JWT token
    return user;
  }

  async register(registerDto: RegisterDTO) {
    const { email, password, name, role } = registerDto;
    const existingEmail = await this.userModel
      .query()
      .whereRaw('LOWER(email) = LOWER(?)', email)
      .first();
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    const passwordHash = await this.hashPassword(password);
    const user = await this.userModel
      .query()
      .insert({
        email,
        password: passwordHash,
        name,
        role,
      })
      .returning('*');

    return user as Omit<User, 'password'>;
  }

  private async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(password, saltOrRounds);
  }

  private async validateUserPassword(
    user: User,
    passwordText: string,
  ): Promise<boolean> {
    return bcrypt.compare(passwordText, user.password);
  }
}
