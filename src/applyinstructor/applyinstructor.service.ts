import { Injectable } from '@nestjs/common';
import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';

@Injectable()
export class ApplyinstructorService {
  create(createApplyinstructorDto: CreateApplyinstructorDto) {
    return 'This action adds a new applyinstructor';
  }

  findAll() {
    return `This action returns all applyinstructor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applyinstructor`;
  }

  update(id: number, updateApplyinstructorDto: UpdateApplyinstructorDto) {
    return `This action updates a #${id} applyinstructor`;
  }

  remove(id: number) {
    return `This action removes a #${id} applyinstructor`;
  }
}
