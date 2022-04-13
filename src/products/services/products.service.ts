import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCreate, ProductUpdate } from '../dtos/products.dto';
import { Product } from '../entities/product.entity';
import { BrandsService } from './brands.service';
import { CategoriesService } from './categories.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    private brandsService: BrandsService,
    private categoriesService: CategoriesService,
  ) {}

  findAll() {
    return this.productsRepo.find({
      relations: ['brand', 'category'],
    });
  }

  findOne(id: number) {
    return this.productsRepo.findOne(id);
  }

  async create(product: ProductCreate) {
    const newProduct = this.productsRepo.create(product);
    if (product.brandId) {
      const brand = await this.brandsService.getBrand(product.brandId);
      newProduct.brand = brand;
    }
    if (product.categoryId) {
      const category = await this.categoriesService.findOne(product.categoryId);
      newProduct.category = category;
    }
    return this.productsRepo.save(newProduct);
  }

  async update(id: number, changes: ProductUpdate) {
    const product = await this.productsRepo.findOne(id);
    this.productsRepo.merge(product, changes);
    if (changes.brandId) {
      const brand = await this.brandsService.getBrand(changes.brandId);
      product.brand = brand;
    }
    if (changes.categoryId) {
      const category = await this.categoriesService.findOne(changes.categoryId);
      product.category = category;
    }
    return this.productsRepo.save(product);
  }

  delete(id: number) {
    return this.productsRepo.delete(id);
  }
}
