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
exports.BrandController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const role_enum_1 = require("../core/constants/role.enum");
const guards_1 = require("../auth/guards");
const brand_service_1 = require("./brand.service");
const dtos_1 = require("./dtos");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async createBrand(createBrandDto) {
        return this.brandService.createBrand(createBrandDto);
    }
    async getBrands() {
        return this.brandService.getBrands();
    }
    async createMealAddon(brandId, createMealAddonDto) {
        return this.brandService.createMealAddonForBrand(brandId, createMealAddonDto);
    }
    async getMealAddons(brandId) {
        return this.brandService.findAllBrandMealAddons(brandId);
    }
    async getMealAddonById(brandId, addonId) {
        return this.brandService.findBrandMealAddonById(addonId, brandId);
    }
    async updateMealAddonById(brandId, addonId, updateMealAddonDto) {
        return this.brandService.updateBrandMealAddonById(addonId, brandId, updateMealAddonDto);
    }
    async deleteMealAddonById(brandId, addonId) {
        return this.deleteMealAddonById(addonId, brandId);
    }
    async createMealAddonCategory(brandId, createBrandCategoryDto) {
        return this.brandService.createBrandCategory(brandId, createBrandCategoryDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 201, type: require("./dtos/brand.dto").BrandDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateBrandDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrand", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: [require("./dtos/brand.dto").BrandDTO] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getBrands", null);
__decorate([
    (0, common_1.Post)(':brandId/addons'),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 201, type: require("./dtos/meal-addon.dto").MealAddonDTO }),
    __param(0, (0, common_1.Param)('brandId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.CreateMealAddonDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createMealAddon", null);
__decorate([
    (0, common_1.Get)(':brandId/addons'),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: [require("./dtos/meal-addon.dto").MealAddonDTO] }),
    __param(0, (0, common_1.Param)('brandId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getMealAddons", null);
__decorate([
    (0, common_1.Get)(':brandId/addons/:addonId'),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: require("./dtos/meal-addon.dto").MealAddonDTO }),
    __param(0, (0, common_1.Param)('brandId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Param)('addonId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getMealAddonById", null);
__decorate([
    (0, common_1.Patch)(':brandId/addons/:addonId'),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: require("./dtos/meal-addon.dto").MealAddonDTO }),
    __param(0, (0, common_1.Param)('brandId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Param)('addonId', new common_1.ParseUUIDPipe())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, dtos_1.UpdateMealAddonDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "updateMealAddonById", null);
__decorate([
    (0, common_1.Delete)(':brandId/addons/:addonId'),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('brandId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Param)('addonId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "deleteMealAddonById", null);
__decorate([
    (0, common_1.Post)(':brandId/addon-categories'),
    (0, roles_decorator_1.Roles)(role_enum_1.ROLE.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('brandId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.CreateBrandCategoryDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createMealAddonCategory", null);
BrandController = __decorate([
    (0, swagger_1.ApiTags)('Brand Controller'),
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map