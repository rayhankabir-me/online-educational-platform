import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('addToCart')
  async create(@Body(ValidationPipe) createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);    
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':course_id')
  async findOne(@Param('course_id') course_id: string) {
    return await this.cartService.findOne(+course_id);
  }

  @Patch(':course_id') 
  async update(@Param('course_id') course_id: number, @Body() updateCartDto: UpdateCartDto) {

  await this.cartService.update(course_id, updateCartDto);
  return { message: 'The cart has been updated successfully' };
  }
  

  @Delete(':course_id')
  async remove(@Param('course_id', ParseIntPipe) course_id: number) {
    await this.cartService.remove(course_id);
    return { message: 'The course has been removed from the cart successfully.' };
  }
}
