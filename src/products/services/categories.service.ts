import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Electrodomesticos',
    },
  ];

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category {
    return this.categories.find((category) => category.id === id);
  }

  create(category): Category {
    category.id = this.categories.length + 1;
    this.categories.push(category);
    return category;
  }

  update(id: number, category): Category {
    const index = this.categories.findIndex((c) => c.id === id);
    const updatedCategory = { ...this.categories[index], ...category };
    this.categories[index] = updatedCategory;
    return updatedCategory;
  }

  delete(id: number): Category {
    const index = this.categories.findIndex((c) => c.id === id);
    const deletedCategory = this.categories[index];
    this.categories.splice(index, 1);
    return deletedCategory;
  }
}
