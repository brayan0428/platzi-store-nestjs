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
  Query,
} from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import config from 'src/config';
import {
  FilterProduct,
  ProductCreate,
  ProductUpdate,
} from '../dtos/products.dto';
import { ProductsService } from '../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    @Inject('APP_DATABASE') private appDatabase: any,
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
  ) {}

  @ApiOperation({ summary: 'Get all products' })
  @Get()
  getProducts(@Query() params: FilterProduct) {
    console.log(this.appDatabase);
    console.log(this.configType.apiKey);
    return this.productService.findAll(params);
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  createProduct(@Body() product: ProductCreate) {
    const newProduct = this.productService.create(product);
    return newProduct;
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: ProductUpdate) {
    const updatedProduct = this.productService.update(id, product);
    return updatedProduct;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    const deletedProduct = this.productService.delete(id);
    return deletedProduct;
  }
}
