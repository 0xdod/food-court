import { BaseModel } from './base.model';
import { Brand } from './brand.model';
export declare class Category extends BaseModel {
    static tableName: string;
    name: string;
    brandId: string;
    brand: Brand;
    static relationMappings: {
        brand: {
            relation: import("objection").RelationType;
            modelClass: typeof Brand;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
