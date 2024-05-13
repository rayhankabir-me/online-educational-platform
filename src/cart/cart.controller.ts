import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/entities/user.entity';
import { RolesGards } from 'src/auth/roles.guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('addToCart')
  @UseGuards(AuthGuard())
  async create(
    @Body() createCartDto: CreateCartDto,
    @GetUser() user: User,
  ) {
    return this.cartService.create(createCartDto, user);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get('forMe')
  @UseGuards(AuthGuard())
  findAllForOneUser(@GetUser() user: User,) {
    return this.cartService.findAllForOneUser(user);
  }

  @Get(':course_id')
  async findOne(@Param('course_id') course_id: string) {
    return await this.cartService.findOne(+course_id);
  }

  @Patch(':course_id') 
  async update(
    @Param('course_id', ParseIntPipe) course_id: number,
    @Body(ValidationPipe) updateCartDto: UpdateCartDto,
    @GetUser() user: User,
  ) {
    return await this.cartService.update(course_id, updateCartDto, user);
  }
  

  @Delete(':course_id')
  async remove(@Param('course_id', ParseIntPipe) course_id: number) {
    await this.cartService.remove(course_id);
    return { message: 'The course has been removed from the cart successfully.' };
  }
}
