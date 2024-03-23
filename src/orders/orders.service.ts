import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(User)
    private readonly categoryRepository: Repository<User>,
  ) {}

  //any loggedin users can create order
  async create(createOrderDto: CreateOrderDto, user: User) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { order_date, updated_at, ...orderData } = createOrderDto;
    const order = this.orderRepository.create({
      ...orderData,
      order_date: new Date(),
      updated_at: new Date(),
      user,
    });

    return await this.orderRepository.save(order);
  }

  //admin can view all orders
  async findAll() {
    const orders = await this.orderRepository.find({
      relations: ['user'],
    });
    if (!orders) {
      throw new NotFoundException('Sorry, no oders found');
    }
    return orders;
  }

  //getting orders history for any loggedin users
  async myOrders(user) {
    const orders = await this.orderRepository.find({
      where: { user },
      relations: ['user'],
    });
    if (!orders) {
      throw new NotFoundException('Sorry, no oder found');
    }
    return orders;
  }

  //view an order details for admin
  async findOne(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!order) {
      throw new NotFoundException('Sorry, the order was not found');
    }
    return order;
  }

  //view an order details for admin
  async myOrder(id: number, user) {
    const order = await this.orderRepository.findOne({
      where: { id, user },
      relations: ['user'],
    });
    if (!order) {
      throw new NotFoundException('Sorry, there is no such order');
    }
    return order;
  }

  //admin can update order status to completed or processing
  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const orderFound = await this.orderRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!orderFound) {
      throw new NotFoundException('Sorry, the order not found');
    }
    orderFound.order_status = updateOrderDto.order_status;
    orderFound.updated_at = new Date();

    return await this.orderRepository.save(orderFound);
  }

  //admin can delete order
  async remove(id: number) {
    const orderToDelete = await this.orderRepository.findOneBy({
      id: id,
    });
    if (!orderToDelete) {
      throw new NotFoundException('Sorry, the order not found');
    }
    try {
      await this.orderRepository.remove(orderToDelete);
      return 'Order deleted successfully!';
    } catch (error) {
      throw new Error('Sorry, Failed to delete the order');
    }
  }
}
