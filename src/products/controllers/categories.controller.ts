import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CategoryCreate, CategoryUpdate } from '../dtos/categories.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  createCategory(@Body() category: CategoryCreate) {
    const newCategory = this.categoriesService.create(category);
    return newCategory;
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: CategoryUpdate,
  ) {
    const updatedCategory = this.categoriesService.update(id, category);
    return updatedCategory;
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    const deletedCategory = this.categoriesService.delete(id);
    return deletedCategory;
  }
}
