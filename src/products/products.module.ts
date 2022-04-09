import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsService } from './services/brands.service';
import { BrandsController } from './controllers/brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { Brand, BrandSchema } from './entities/brand.entity';
import { Category, CategorySchema } from './entities/category.entity';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { Order, OrderSchema } from './entities/order.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Brand.name,
        schema: BrandSchema,
      },
      {
        name: Category.name,
        schema: CategorySchema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [
    ProductsController,
    CategoriesController,
    BrandsController,
    OrdersController,
  ],
  providers: [ProductsService, CategoriesService, BrandsService, OrdersService],
})
export class ProductsModule {}
