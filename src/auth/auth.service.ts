import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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
}
