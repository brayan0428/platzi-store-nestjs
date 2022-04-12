import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productsRepo.find();
  }

  findOne(id: number) {
    return this.productsRepo.findOne(id);
  }

  create(product) {
    const newProduct = this.productsRepo.create(product);
    return this.productsRepo.save(newProduct);
  }

  async update(id: number, changes) {
    const product = await this.productsRepo.findOne(id);
    this.productsRepo.merge(product, changes);
    return this.productsRepo.save(product);
  }

  delete(id: number) {
    return this.productsRepo.delete(id);
  }
}
