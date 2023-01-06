import { ROLES } from '../../core/constants/role.enum';

export class UserDTO {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: ROLES;
  readonly createdAt: Date;
}
