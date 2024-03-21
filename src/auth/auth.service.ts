import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { username, email, password } = createUserDto;

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

    const user = this.userRepository.create({ username, email, password });
    return await this.userRepository.save(user);
  }

  async loginUser(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;

    const user = await this.userRepository.findOneBy({ username: username });
    if (user && (await bcrypt.compare(password, (await user).password))) {
      const payload = { username };
      return {
        access_token: await this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid login credentials!');
    }
  }
}
