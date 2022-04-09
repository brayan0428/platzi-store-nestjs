import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  findAll() {
    return this.orderModel.find().populate('user').populate('products').exec();
  }

  findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  create(order) {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  update(id: string, order) {
    return this.orderModel
      .findByIdAndUpdate(id, { $set: order }, { new: true })
      .exec();
  }

  delete(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
