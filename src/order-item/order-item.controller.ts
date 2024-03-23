import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderItemDto } from './dto/order-item.dto';
import { OrderItemService } from './order-item.service';

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly ordersService: OrderItemService) {}

  //any users can add products to cart
  @Post('create')
  create(@Body() orderItemDto: OrderItemDto, @Res() response: Response) {
    return this.ordersService.create(orderItemDto, response);
  }

  @Get()
  getCookie(@Req() request: Request) {
    return this.ordersService.getCookie(request);
  }
}
