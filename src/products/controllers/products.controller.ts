import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductCreate, ProductUpdate } from '../dtos/products.dto';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    @Inject('APP_DATABASE') private appDatabase: any,
    private configService: ConfigService,
  ) {}

  @Get()
  getProducts() {
    console.log(this.appDatabase);
    console.log(this.configService.get('API_KEY'));
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  createProduct(@Body() product: ProductCreate) {
    const newProduct = this.productService.create(product);
    return newProduct;
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: ProductUpdate,
  ) {
    const updatedProduct = this.productService.update(id, product);
    return updatedProduct;
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    const deletedProduct = this.productService.delete(id);
    return deletedProduct;
  }
}
