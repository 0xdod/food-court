import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dtos';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDTO): Promise<{
        user: import("../database/models").User;
        token: string;
    }>;
    register(body: RegisterDTO): Promise<import("../database/models").User>;
}
