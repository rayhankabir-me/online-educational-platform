import { Injectable } from '@nestjs/common';
import { CreateNewcourseDto } from './dto/create-newcourse.dto';
import { UpdateNewcourseDto } from './dto/update-newcourse.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Newcourse } from 'src/entities/newcourse.entity';

@Injectable()
export class NewcourseService {
 
  constructor(
    @InjectRepository(Newcourse) private readonly newcourseRepo: Repository<Newcourse>,
    ) {}

   async create(createNewcourseDto: CreateNewcourseDto) {
    const newcourse = await this.newcourseRepo.create(createNewcourseDto);
    return await this.newcourseRepo.save(newcourse);
  }

  Newcourse(){
    return this.newcourseRepo.find();
 }
  findAll() {
    return `This action returns all newcourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newcourse`;
  }

  update(id: number, updateNewcourseDto: UpdateNewcourseDto) {
    return `This action updates a #${id} newcourse`;
  }
  async approveNewcourse(id: number) {
    const user = await this.newcourseRepo.findOne({ where: { id: id } });
    user.approval = true;
    return this.newcourseRepo.save(user);
  }
  remove(id: number) {
    return `This action removes a #${id} newcourse`;
  }
  async removenewcourse(id: number) {
    const review = await this.newcourseRepo.findOne({ where: { id: id } });
    if (!review) {
      throw new Error('Course review not found');
    }
    await this.newcourseRepo.delete({ id });
  }
}
