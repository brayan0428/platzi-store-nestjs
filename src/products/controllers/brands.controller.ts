import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrandCreate, BrandUpdate } from '../dtos/brand.dto';
import { BrandsService } from '../services/brands.service';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getBrands() {
    return this.brandsService.getBrands();
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return this.brandsService.getBrand(id);
  }

  @Post()
  createBrand(@Body() brand: BrandCreate) {
    return this.brandsService.createBrand(brand);
  }

  @Put(':id')
  updateBrand(@Param('id') id: string, @Body() brand: BrandUpdate) {
    return this.brandsService.updateBrand(id, brand);
  }

  @Delete(':id')
  deleteBrand(@Param('id') id: string) {
    return this.brandsService.deleteBrand(id);
  }
}
