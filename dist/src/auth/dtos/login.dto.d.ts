import { UserDTO } from '../../user/dtos';
export declare class LoginDTO {
    email: string;
    password: string;
}
export declare class LoginResponseDTO {
    user: UserDTO;
    token: string;
}
