import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../entities/product.entity';
import { Model, FilterQuery } from 'mongoose';
import { FilterProduct } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll(params?: FilterProduct) {
    if (params) {
      const { limit, offset, minPrice, maxPrice } = params;
      const filters: FilterQuery<Product> = {};
      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      return this.productModel
        .find(filters)
        .populate('brand')
        .populate('category')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.productModel
      .find()
      .populate('brand')
      .populate('category')
      .exec();
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
