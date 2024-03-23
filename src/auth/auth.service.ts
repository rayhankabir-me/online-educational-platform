import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  //create user or register user
  async createUser(createUserDto: CreateUserDto) {
    const { username, email, password, role } = createUserDto;

    const existsName = await this.userRepository.findOneBy({
      username: username,
    });
    const existsEmail = await this.userRepository.findOneBy({
      email: email,
    });

    if (existsName) {
      throw new BadRequestException('Username already exists!');
    }
    if (existsEmail) {
      throw new BadRequestException('This email is already used in an account');
    }

    const user = this.userRepository.create({
      username,
      email,
      password,
      role,
    });
    return await this.userRepository.save(user);
  }

  //login user and generate token
  async loginUser(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;

    const user = await this.userRepository.findOneBy({ username: username });
    if (user && (await bcrypt.compare(password, (await user).password))) {
      const payload = { username, role: user.role };
      return {
        access_token: await this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid login credentials!');
    }
  }

  //find all users (admin can do)
  async allUsers() {
    const users = await this.userRepository.find();

    if (!users) {
      throw new NotFoundException('Sorry, no users found!');
    }
    return users;
  }

  //fine one user (get user details)
  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new NotFoundException('Sorry, the user not found');
    }
    return user;
  }

  //get my profile( logged in user can)
  async myProfile(user: User) {
    const profile = await this.userRepository.findOneBy({
      username: user.username,
    });

    if (!profile) {
      throw new NotFoundException('Sorry, the profile not found!');
    }

    return profile;
  }

  //update user info (only admin can do)
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new NotFoundException('Sorry the user not found');
    }

    const { username, email } = updateUserDto;

    const existsName = await this.userRepository.findOneBy({
      username: username,
    });
    const existsEmail = await this.userRepository.findOneBy({
      email: email,
    });

    if (existsName) {
      throw new BadRequestException('Username already exists!');
    }
    if (existsEmail) {
      throw new BadRequestException('This email is already used in an account');
    }

    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.role = updateUserDto.role;

    return await this.userRepository.save(user);
  }
}
