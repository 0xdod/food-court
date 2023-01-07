import { ROLE } from '../../core/constants/role.enum';
import { BaseModel } from './base.model';
export declare class User extends BaseModel {
    static get tableName(): string;
    name: string;
    email: string;
    password: string;
    role: ROLE;
    $formatJson(json: any): any;
}
