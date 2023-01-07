"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../database/models");
let BrandService = class BrandService {
    constructor(mealAddonModel, brandModel, categoryModel) {
        this.mealAddonModel = mealAddonModel;
        this.brandModel = brandModel;
        this.categoryModel = categoryModel;
    }
    async createBrand(data) {
        const brand = await this.brandModel.query().insert(data);
        return brand;
    }
    async getBrands() {
        const brands = await this.brandModel.query();
        return brands;
    }
    async createMealAddonForBrand(brandId, data) {
        return this.mealAddonModel
            .query()
            .insert(Object.assign({ brandId }, data))
            .returning('*');
    }
    async findAllBrandMealAddons(brandId) {
        return this.mealAddonModel.query().where({ brandId });
    }
    async findBrandMealAddonById(id, brandId) {
        const addon = await this.mealAddonModel
            .query()
            .where({
            brandId,
            id,
        })
            .first();
        if (!addon) {
            throw new common_1.NotFoundException('Meal addon not found');
        }
        return addon;
    }
    async updateBrandMealAddonById(id, brandId, data) {
        return this.mealAddonModel
            .query()
            .patchAndFetch(data)
            .where({
            brandId,
            id,
        })
            .first();
    }
    async deleteBrandMealAddonById(id, brandId) {
        return this.mealAddonModel.query().delete().where({
            brandId,
            id,
        });
    }
    async createBrandCategory(brandId, data) {
        const { name } = data;
        return this.categoryModel.query().insert({
            brandId,
            name,
        });
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(models_1.MealAddon.name)),
    __param(1, (0, common_1.Inject)(models_1.Brand.name)),
    __param(2, (0, common_1.Inject)(models_1.Category.name)),
    __metadata("design:paramtypes", [Object, Object, Object])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map