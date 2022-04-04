import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      url: 'http://url1.com',
      price: 100,
      quantity: 10,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  create(product): Product {
    const newProduct = { ...product };
    newProduct.id = this.products.length + 1;
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product): Product {
    const index = this.products.findIndex((p) => p.id === id);
    const oldProduct = this.products[index];
    this.products[index] = { ...oldProduct, ...product };
    return this.products[index];
  }

  delete(id: number): Product {
    const index = this.products.findIndex((p) => p.id === id);
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }
}
