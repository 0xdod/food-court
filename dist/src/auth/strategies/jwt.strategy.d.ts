import { Strategy } from 'passport-jwt';
import { ModelClass } from 'objection';
import { User } from 'src/database/models';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userModel;
    constructor(userModel: ModelClass<User>);
    validate(payload: any): Promise<User>;
}
export {};
