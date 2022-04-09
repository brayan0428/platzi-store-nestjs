import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(id: string) {
    return this.categoryModel.findById(id);
  }

  create(category) {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }

  update(id: string, category) {
    const updatedCategory = this.categoryModel.findByIdAndUpdate(
      id,
      { $set: category },
      { new: true },
    );
    return updatedCategory;
  }

  delete(id: string) {
    return this.categoryModel.findByIdAndRemove(id);
  }
}
