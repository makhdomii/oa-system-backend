import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { Orders, OrdersDocument } from './schemas/orders.schema';

// export type User = any;

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders.name)
    private readonly orderModel: Model<OrdersDocument>,
  ) {}

  async create(createUserDto: CreateOrdersDto): Promise<Orders> {
    return new this.orderModel(createUserDto).save();
  }
}
