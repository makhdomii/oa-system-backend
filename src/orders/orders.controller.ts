import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dto/create-orders.dto';

@Controller('order')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('/add')
  async add_ticket(@Body() createOrdersDto: CreateOrdersDto) {
    return await this.orderService.create(createOrdersDto);
  }
}
