import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ROLE } from 'src/core/constants/role.enum';
import { JwtAuthGuard, RolesGuard } from '../auth/guards';
import { BrandService } from './brand.service';
import {
  CreateBrandCategoryDTO,
  CreateBrandDTO,
  CreateMealAddonDTO,
  UpdateMealAddonDTO,
} from './dtos';

@ApiTags('Brand Controller')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async createBrand(@Body() createBrandDto: CreateBrandDTO) {
    return this.brandService.createBrand(createBrandDto);
  }

  @Get()
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async getBrands() {
    return this.brandService.getBrands();
  }

  @Post(':brandId/addons')
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
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
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async getMealAddons(@Param('brandId', new ParseUUIDPipe()) brandId: string) {
    return this.brandService.findAllBrandMealAddons(brandId);
  }

  @Get(':brandId/addons/:addonId')
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async getMealAddonById(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Param('addonId', new ParseUUIDPipe()) addonId: string,
  ) {
    return this.brandService.findBrandMealAddonById(addonId, brandId);
  }

  @Patch(':brandId/addons/:addonId')
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
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
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async deleteMealAddonById(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Param('addonId', new ParseUUIDPipe()) addonId: string,
  ) {
    return this.deleteMealAddonById(addonId, brandId);
  }

  @Post(':brandId/addon-categories')
  @Roles(ROLE.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async createMealAddonCategory(
    @Param('brandId', new ParseUUIDPipe()) brandId: string,
    @Body() createBrandCategoryDto: CreateBrandCategoryDTO,
  ) {
    return this.brandService.createBrandCategory(
      brandId,
      createBrandCategoryDto,
    );
  }
}
