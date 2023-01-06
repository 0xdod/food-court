import { ROLES } from '../../core/constants/role.enum';
import { BaseModel } from './base.model';

export class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  name: string;
  email: string;
  password: string;
  role: ROLES;

  $formatJson(json: any) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }
}
