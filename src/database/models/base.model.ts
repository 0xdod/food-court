import { Model } from 'objection';

export class BaseModel extends Model {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;

  $beforeUpdate() {
    this.updatedAt = new Date();
  }
}
