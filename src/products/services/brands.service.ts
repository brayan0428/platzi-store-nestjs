import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from '../entities/brand.entity';
import { Model } from 'mongoose';
@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  getBrands() {
    return this.brandModel.find();
  }

  getBrand(id: string) {
    return this.brandModel.findById(id);
  }

  createBrand(brand) {
    const newBrand = new this.brandModel(brand);
    return newBrand.save();
  }

  updateBrand(id: string, brand) {
    const brandUpdate = this.brandModel.findByIdAndUpdate(
      id,
      { $set: brand },
      { new: true },
    );
    return brandUpdate;
  }

  deleteBrand(id: string) {
    return this.brandModel.findByIdAndDelete(id);
  }
}
