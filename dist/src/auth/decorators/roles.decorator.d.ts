import { ROLE } from '../../core/constants/role.enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: ROLE[]) => import("@nestjs/common").CustomDecorator<string>;
