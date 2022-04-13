import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectRepository(Brand) private brandsRepo: Repository<Brand>) {}

  getBrands() {
    return this.brandsRepo.find();
  }

  getBrand(id: number) {
    return this.brandsRepo.findOne(id);
  }

  createBrand(brand) {
    const newBrand = this.brandsRepo.create(brand);
    return this.brandsRepo.save(newBrand);
  }

  async updateBrand(id: number, changes) {
    const brand = await this.brandsRepo.findOne(id);
    this.brandsRepo.merge(brand, changes);
    return this.brandsRepo.save(brand);
  }

  deleteBrand(id: number) {
    return this.brandsRepo.delete(id);
  }
}
