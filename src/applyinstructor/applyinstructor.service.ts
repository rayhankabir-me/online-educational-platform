import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApplyinstructorService {
   
 
  constructor(
    @InjectRepository(Applyinstructor) private readonly applyinstructorRepo: Repository<Applyinstructor>,
    ) {}

   async create(createApplyinstructorDto: CreateApplyinstructorDto) {
    const applyinstructor = this.applyinstructorRepo.create(createApplyinstructorDto);
    return await this.applyinstructorRepo.save(applyinstructor);
  }

  findAll() {
    return `This action returns all applyinstructor`;
  }
  ApplyInstructor(){
    return this.applyinstructorRepo.find();
 }
 async approveApplyInstructor(id: number) {
    const user = await this.applyinstructorRepo.findOne({ where: { id: id } });
    user.approval = true;
    return this.applyinstructorRepo.save(user);
  }

  async update(id: number, updateApplyinstructorDto: UpdateApplyinstructorDto): Promise<void> {
    const applyinstructor = await this.applyinstructorRepo.findOne({ where: { id: id } });
 
    if (!applyinstructor) {
      throw new NotFoundException(' not found');
    }
    await this.applyinstructorRepo.update(applyinstructor.id, updateApplyinstructorDto);
  }
  findOne(id: number) {
    return `This action returns a #${id} applyinstructor`;
  }

  async remove(id: number) {
    const review = await this.applyinstructorRepo.findOne({ where: { id: id } });
    if (!review) {
      throw new Error('Course review not found');
    }
    return this.applyinstructorRepo.delete(id);
  }
 
 
}
