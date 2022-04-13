import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepo.find();
  }

  findOne(id: number) {
    return this.categoryRepo.findOne(id);
  }

  create(category) {
    const newCategory = this.categoryRepo.create(category);
    return this.categoryRepo.save(newCategory);
  }

  async update(id: number, changes) {
    const category = await this.categoryRepo.findOne(id);
    this.categoryRepo.merge(category, changes);
    return this.categoryRepo.save(category);
  }

  delete(id: number) {
    return this.categoryRepo.delete(id);
  }
}
