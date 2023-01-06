import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDTO, CreateMealAddonDTO, UpdateMealAddonDTO } from './dtos';

@ApiTags('Brand Controller')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async createBrand(@Body() createBrandDto: CreateBrandDTO) {
    return this.brandService.createBrand(createBrandDto);
  }

  @Get()
  async getBrands() {
    return this.brandService.getBrands();
  }

  @Post(':brandId/addons')
  async createMealAddon(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Body() createMealAddonDto: CreateMealAddonDTO,
  ) {
    return this.brandService.createMealAddonForBrand(
      brandId,
      createMealAddonDto,
    );
  }

  @Get(':brandId/addons')
  async getMealAddons(@Param('brandId', new ParseUUIDPipe()) brandId: string) {
    return this.brandService.findAllBrandMealAddons(brandId);
  }

  @Get(':brandId/addons/:addonId')
  async getMealAddonById(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Param('addonId', new ParseUUIDPipe()) addonId: string,
  ) {
    return this.brandService.findBrandMealAddonById(addonId, brandId);
  }

  @Patch(':brandId/addons/:addonId')
  async updateMealAddonById(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Param('addonId', new ParseUUIDPipe()) addonId: string,
    @Body() updateMealAddonDto: UpdateMealAddonDTO,
  ) {
    return this.brandService.updateBrandMealAddonById(
      addonId,
      brandId,
      updateMealAddonDto,
    );
  }

  @Delete(':brandId/addons/:addonId')
  async deleteMealAddonById(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Param('addonId', new ParseUUIDPipe()) addonId: string,
  ) {
    return this.deleteMealAddonById(addonId, brandId);
  }

  @Post(':brandId/addon-categories')
  async createMealAddonCategory(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
  ) {
    return {
      brandId,
      message: 'addon category created',
    };
  }
}
