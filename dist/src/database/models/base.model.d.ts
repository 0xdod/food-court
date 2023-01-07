import { Model } from 'objection';
export declare class BaseModel extends Model {
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
    $beforeUpdate(): void;
}
