import { ModelClass } from 'objection';
import { User } from '../database/models';
import { LoginDTO, RegisterDTO } from './dtos';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: ModelClass<User>, jwtService: JwtService);
    login(loginDto: LoginDTO): Promise<{
        user: User;
        token: string;
    }>;
    register(registerDto: RegisterDTO): Promise<User>;
    private hashPassword;
    private validateUserPassword;
}
