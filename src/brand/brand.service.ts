import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ModelClass } from 'objection';
import { Brand, Category, MealAddon } from '../database/models';
import {
  BrandDTO,
  CreateBrandCategoryDTO,
  CreateBrandDTO,
  CreateMealAddonDTO,
  MealAddonDTO,
  UpdateMealAddonDTO,
} from './dtos';

@Injectable()
export class BrandService {
  constructor(
    @Inject(MealAddon.name)
    private readonly mealAddonModel: ModelClass<MealAddon>,
    @Inject(Brand.name)
    private readonly brandModel: ModelClass<Brand>,
    @Inject(Category.name)
    private readonly categoryModel: ModelClass<Category>,
  ) {}

  async createBrand(data: CreateBrandDTO): Promise<BrandDTO> {
    const brand = await this.brandModel.query().insert(data);
    return brand;
  }

  async getBrands(): Promise<BrandDTO[]> {
    const brands = await this.brandModel.query();
    return brands;
  }

  async createMealAddonForBrand(
    brandId: string,
    data: CreateMealAddonDTO,
  ): Promise<MealAddonDTO> {
    return this.mealAddonModel
      .query()
      .insert({
        brandId,
        ...data,
      })
      .returning('*');
  }

  async findAllBrandMealAddons(brandId: string): Promise<MealAddonDTO[]> {
    return this.mealAddonModel.query().where({ brandId });
  }

  async findBrandMealAddonById(
    id: string,
    brandId: string,
  ): Promise<MealAddonDTO> {
    const addon = await this.mealAddonModel
      .query()
      .where({
        brandId,
        id,
      })
      .first();
    if (!addon) {
      throw new NotFoundException('Meal addon not found');
    }
    return addon;
  }

  async updateBrandMealAddonById(
    id: string,
    brandId: string,
    data: UpdateMealAddonDTO,
  ): Promise<MealAddonDTO> {
    return this.mealAddonModel
      .query()
      .patchAndFetch(data)
      .where({
        brandId,
        id,
      })
      .first();
  }

  async deleteBrandMealAddonById(id: string, brandId: string): Promise<any> {
    return this.mealAddonModel.query().delete().where({
      brandId,
      id,
    });
  }

  async createBrandCategory(
    brandId: string,
    data: CreateBrandCategoryDTO,
  ): Promise<any> {
    const { name } = data;
    return this.categoryModel.query().insert({
      brandId,
      name,
    });
  }
}
