"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const base_model_1 = require("./base.model");
const brand_model_1 = require("./brand.model");
class Category extends base_model_1.BaseModel {
}
exports.Category = Category;
Category.tableName = 'categories';
Category.relationMappings = {
    brand: {
        relation: base_model_1.BaseModel.BelongsToOneRelation,
        modelClass: brand_model_1.Brand,
        join: {
            from: 'categories.brandId',
            to: 'brands.id',
        },
    },
};
//# sourceMappingURL=category.model.js.map