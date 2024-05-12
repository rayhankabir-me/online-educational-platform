import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from 'src/entities/cart.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) 
    private readonly cartRepo: Repository<Cart>, 
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  //my
  // async create(createCartDto: CreateCartDto) {
  //   //const cart = this.cartRepo.create(createCartDto);
  //   //return await this.cartRepo.save(cart);
  //   return await this.cartRepo.save(createCartDto);
  // }

  async create(createCartDto: CreateCartDto, user: User) {
    const { ...cartData } = createCartDto;
    const cart = this.cartRepo.create({
      ...cartData,
      user,
    });

    return await this.cartRepo.save(cart);
  }

  async findAll() {
    const cart = await this.cartRepo.find({
      relations: ['user'],
    });
    if (!cart) {
      throw new NotFoundException('Sorry, no item found');
    }
    return cart;
  }

  async findAllForOneUser(user: User) {
    const cart = await this.cartRepo.find({
      relations: ['user'],
      where:{user:user}
    });
    if (!cart) {
      throw new NotFoundException('Sorry, no item found');
    }
    return cart;
  }

  async findOne(course_id: number) {
    const cartItem = await this.cartRepo.findOne({
      where: { course_id },
      relations: ['user'],
    });
    if (!cartItem) {
      throw new NotFoundException('Sorry, the item not found');
    }
    return cartItem;
  }
  
  //update cart by course_id
  async update(course_id: number, updateCartDto: UpdateCartDto, user: User) {
    const cart = await this.cartRepo.findOne({
      where: { course_id, user },
      relations: ['user'],
    });
    if (!cart) {
      throw new NotFoundException('Sorry the item is not found');
    }
    cart.no_of_items = updateCartDto.no_of_items;
    return await this.cartRepo.save(cart);
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
