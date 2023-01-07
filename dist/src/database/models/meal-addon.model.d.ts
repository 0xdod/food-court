import { BaseModel } from './base.model';
import { Brand } from './brand.model';
export declare class MealAddon extends BaseModel {
    static get tableName(): string;
    name: string;
    price: number;
    description: string;
    category: string;
    brandId: string;
    brand: Brand;
    static get relationMappings(): {
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
