import { ModelClass } from 'objection';
import { Brand, Category, MealAddon } from '../database/models';
import { BrandDTO, CreateBrandCategoryDTO, CreateBrandDTO, CreateMealAddonDTO, MealAddonDTO, UpdateMealAddonDTO } from './dtos';
export declare class BrandService {
    private readonly mealAddonModel;
    private readonly brandModel;
    private readonly categoryModel;
    constructor(mealAddonModel: ModelClass<MealAddon>, brandModel: ModelClass<Brand>, categoryModel: ModelClass<Category>);
    createBrand(data: CreateBrandDTO): Promise<BrandDTO>;
    getBrands(): Promise<BrandDTO[]>;
    createMealAddonForBrand(brandId: string, data: CreateMealAddonDTO): Promise<MealAddonDTO>;
    findAllBrandMealAddons(brandId: string): Promise<MealAddonDTO[]>;
    findBrandMealAddonById(id: string, brandId: string): Promise<MealAddonDTO>;
    updateBrandMealAddonById(id: string, brandId: string, data: UpdateMealAddonDTO): Promise<MealAddonDTO>;
    deleteBrandMealAddonById(id: string, brandId: string): Promise<any>;
    createBrandCategory(brandId: string, data: CreateBrandCategoryDTO): Promise<any>;
}
