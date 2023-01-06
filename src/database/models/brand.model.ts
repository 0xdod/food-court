import { BaseModel } from './base.model';

export class Brand extends BaseModel {
  static tableName = 'brands';

  name: string;
}
