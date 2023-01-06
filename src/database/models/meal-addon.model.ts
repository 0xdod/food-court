import { BaseModel } from './base.model';
import { Brand } from './brand.model';

export class MealAddon extends BaseModel {
  static get tableName() {
    return 'meal_addons';
  }

  name: string;
  price: number;
  description: string;
  category: string;
  brandId: string;
  // createdBy: string;

  brand: Brand;
  // creator: User;

  static get relationMappings() {
    return {
      brand: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: 'meal_addons.brandId',
          to: 'brands.id',
        },
      },
      // creator: {
      //   relation: BaseModel.BelongsToOneRelation,
      //   modelClass: User,
      //   join: {
      //     from: 'meal_addons.createdBy',
      //     to: 'users.id',
      //   },
      // },
    };
  }
}
