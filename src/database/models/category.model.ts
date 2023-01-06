import { BaseModel } from './base.model';
import { Brand } from './brand.model';

export class Category extends BaseModel {
  static tableName = 'categories';

  name: string;
  brandId: string;

  brand: Brand;

  static relationMappings = {
    brand: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: 'categories.brandId',
        to: 'brands.id',
      },
    },
  };
}
