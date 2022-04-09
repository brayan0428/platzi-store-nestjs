import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  AddProductOrderDto,
  CreateOrderDto,
  UpdateOrderDto,
} from '../dtos/order.dto';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAllOrders() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  createOrder(@Body() order: CreateOrderDto) {
    return this.ordersService.create(order);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() order: UpdateOrderDto) {
    return this.ordersService.update(id, order);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.delete(id);
  }

  @Post(':id/products')
  addProductOrder(@Param('id') id: string, @Body() body: AddProductOrderDto) {
    return this.ordersService.addProduct(id, body.products);
  }

  @Delete(':id/products/:productId')
  deleteProductOrder(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return this.ordersService.deleteProduct(id, productId);
  }
}
