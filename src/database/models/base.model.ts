import { Model } from 'objection';

export class BaseModel extends Model {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;

  $beforeSave() {
    this.updatedAt = new Date();
  }
}
