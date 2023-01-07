import { ROLE } from '../../core/constants/role.enum';
export declare class UserDTO {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly role: ROLE;
    readonly createdAt: Date;
}
