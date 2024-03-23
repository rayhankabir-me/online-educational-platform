import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { AdminGuard } from './admin.guards';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //register or create user
  @Post('register')
  register(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  //login user
  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.loginUser(createUserDto);
  }

  //getting all users (admin can do only)
  @Get('all-users')
  @UseGuards(AuthGuard(), AdminGuard)
  allUsers() {
    return this.authService.allUsers();
  }

  @Get('my-profile')
  @UseGuards(AuthGuard())
  myProfile(@GetUser() user: User) {
    return this.authService.myProfile(user);
  }

  //checking profile
  @Post('/profile')
  @UseGuards(AuthGuard())
  profile(@GetUser() user: User) {
    console.log(user);
    return user;
  }

  //getting user details
  @UseGuards(AuthGuard(), AdminGuard)
  @Get('all-users/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.authService.findOne(id);
  }

  @Patch('update/:id')
  @UseGuards(AuthGuard(), AdminGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return await this.authService.update(id, updateUserDto);
  }
}
