import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: string) {
    return this.productModel.findById(id).exec();
  }

  create(product) {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  update(id: string, product) {
    const productUpdate = this.productModel.findByIdAndUpdate(
      id,
      { $set: product },
      { new: true },
    );
    return productUpdate;
  }

  delete(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
