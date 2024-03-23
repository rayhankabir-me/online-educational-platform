import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guards';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/entities/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  //admin can see all orders
  @Get('all')
  @UseGuards(AuthGuard(), AdminGuard)
  findAll() {
    return this.ordersService.findAll();
  }

  //getting orders history for any loggedin users
  @Get('myorders')
  @UseGuards(AuthGuard())
  myOrders(@GetUser() user: User) {
    return this.ordersService.myOrders(user);
  }

  //any loggedin users can create order
  @Post('create')
  @UseGuards(AuthGuard())
  create(@Body() createOrderDto: CreateOrderDto, @GetUser() user: User) {
    return this.ordersService.create(createOrderDto, user);
  }

  //view an order details for admin
  @Get(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  //view an order details for customer
  @Get('/myorder/:id')
  @UseGuards(AuthGuard())
  myOrder(@Param('id') id: string, @GetUser() user: User) {
    return this.ordersService.myOrder(+id, user);
  }

  //admin can update order status to completed or processing
  @Patch(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  //adminc can delete order
  @Delete(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
