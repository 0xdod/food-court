import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('brands')
export class BrandController {
  //constructor() {}
  @Post(':brandId/addons')
  createMealAddon(@Param('brandId') brandId: string) {
    return {
      brandId,
      message: 'Brand addons created',
    };
  }

  @Get(':brandId/addons')
  getMealAddons(@Param('brandId') brandId: string) {
    return [
      {
        brandId,
        message: 'Brand addons fetched',
      },
    ];
  }

  @Get(':brandId/addons/:addonId')
  getMealAddonById(
    @Param('brandId') brandId: string,
    @Param('addonId') addonId: string,
  ) {
    return {
      brandId,
      addonId,
      message: 'Brand addon fetched',
    };
  }

  @Patch(':brandId/addons/:addonId')
  updateMealAddonById(
    @Param('brandId') brandId: string,
    @Param('addonId') addonId: string,
  ) {
    return {
      brandId,
      addonId,
      message: 'Brand addon updated',
    };
  }

  @Delete(':brandId/addons/:addonId')
  deleteMealAddonById(
    @Param('brandId') brandId: string,
    @Param('addonId') addonId: string,
  ) {
    return {
      brandId,
      addonId,
      message: 'Brand addon deleted',
    };
  }

  @Post(':brandId/addon-categories')
  createMealAddonCategory(@Param('brandId') brandId: string) {
    return {
      brandId,
      message: 'addon category created',
    };
  }
}
