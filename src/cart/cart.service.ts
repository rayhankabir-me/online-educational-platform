import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from 'src/entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepo: Repository<Cart>,
  ) {}
  async create(createCartDto: CreateCartDto) {
    //const cart = this.cartRepo.create(createCartDto);
    //return await this.cartRepo.save(cart);
    return await this.cartRepo.save(createCartDto);
  }

  async findAll() {
    return await this.cartRepo.find({});
  }

  async findOne(course_id: number) {
    const cartItem = await this.cartRepo.findOne({ where: { course_id: course_id } });
    if (!cartItem) {
      throw new NotFoundException('Course not found in cart');
    }
    return cartItem;
  }
  
  async update(course_id: number, updateCartDto: UpdateCartDto): Promise<void> {
    const itemInCart = await this.cartRepo.findOne({ where: { course_id: course_id } });
  
    if (!itemInCart) {
      throw new NotFoundException('Category not found'); 
    }
    await this.cartRepo.update(itemInCart.id, updateCartDto);
  }

  async remove(course_id: number) {
    const courseToDelete = await this.cartRepo.findOneBy({
      course_id: course_id,
    });
    if (!courseToDelete) {
      throw new NotFoundException('Sorry, the course was not found');
    }
    await this.cartRepo.remove(courseToDelete);
  }
}
