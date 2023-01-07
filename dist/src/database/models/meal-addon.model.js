"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAddon = void 0;
const base_model_1 = require("./base.model");
const brand_model_1 = require("./brand.model");
class MealAddon extends base_model_1.BaseModel {
    static get tableName() {
        return 'meal_addons';
    }
    static get relationMappings() {
        return {
            brand: {
                relation: base_model_1.BaseModel.BelongsToOneRelation,
                modelClass: brand_model_1.Brand,
                join: {
                    from: 'meal_addons.brandId',
                    to: 'brands.id',
                },
            },
        };
    }
}
exports.MealAddon = MealAddon;
//# sourceMappingURL=meal-addon.model.js.map