import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderItemDto } from './dto/order-item.dto';

@Injectable()
export class OrderItemService {
  async create(orderItemDto: OrderItemDto, response: Response) {
    const cookieOptions = {
      maxAge: 3600000, // (1 hour)
      secure: true,
      path: '/',
    };

    const serializedDto = JSON.stringify(orderItemDto);

    response.cookie('orderItem', serializedDto, cookieOptions);

    return await 'Order items are added to cart successfully!';
  }

  //getting the cookie to see it's value
  async getCookie(request: Request) {
    return await request.cookies;
  }
}
