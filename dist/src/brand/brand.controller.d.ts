import { BrandService } from './brand.service';
import { CreateBrandCategoryDTO, CreateBrandDTO, CreateMealAddonDTO, UpdateMealAddonDTO } from './dtos';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    createBrand(createBrandDto: CreateBrandDTO): Promise<import("./dtos").BrandDTO>;
    getBrands(): Promise<import("./dtos").BrandDTO[]>;
    createMealAddon(brandId: string, createMealAddonDto: CreateMealAddonDTO): Promise<import("./dtos").MealAddonDTO>;
    getMealAddons(brandId: string): Promise<import("./dtos").MealAddonDTO[]>;
    getMealAddonById(brandId: string, addonId: string): Promise<import("./dtos").MealAddonDTO>;
    updateMealAddonById(brandId: string, addonId: string, updateMealAddonDto: UpdateMealAddonDTO): Promise<import("./dtos").MealAddonDTO>;
    deleteMealAddonById(brandId: string, addonId: string): any;
    createMealAddonCategory(brandId: string, createBrandCategoryDto: CreateBrandCategoryDTO): Promise<any>;
}
