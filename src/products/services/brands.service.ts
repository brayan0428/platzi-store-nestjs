import { Injectable } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Huawei' },
  ];

  getBrands(): Brand[] {
    return this.brands;
  }

  getBrand(id: number): Brand {
    return this.brands.find((brand) => brand.id === id);
  }

  createBrand(brand): Brand {
    brand.id = this.brands.length + 1;
    this.brands.push(brand);
    return brand;
  }

  updateBrand(id: number, brand): Brand {
    const index = this.brands.findIndex((b) => b.id === id);
    const oldBrand = this.brands[index];
    this.brands[index] = { ...oldBrand, ...brand };
    return this.brands[index];
  }

  deleteBrand(id: number): Brand {
    const index = this.brands.findIndex((b) => b.id === id);
    const brand = this.brands[index];
    this.brands.splice(index, 1);
    return brand;
  }
}
