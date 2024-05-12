import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/entities/payment.entity';
import { Cart } from 'src/entities/cart.entity';
import { CartService } from 'src/cart/cart.service';
import { User } from 'src/entities/user.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) 
    private readonly paymentRepo: Repository<Payment>, 
    @InjectRepository(Cart) 
    private readonly cartRepo: Repository<Cart>, 
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  async create(createPaymentDto: CreatePaymentDto, user:User) {
    const carts = await this.cartRepo.find({
      relations: ['user'],
      where:{user:user}
    });
    if (!carts.length) {
      throw new NotFoundException('Sorry, no item found');
    }
  //console.log("kichu ekta",carts, user);
    const payment = this.paymentRepo.create({...createPaymentDto, user: user, carts: carts});

    return await this.cartRepo.save(payment);
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
