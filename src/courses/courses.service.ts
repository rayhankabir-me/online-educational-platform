import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOneBy({
      id: id,
    });
    if (!course) {
      throw new NotFoundException('Sorry, the course not found');
    }
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.findOneBy({
      id: id,
    });
    if (!course) {
      throw new NotFoundException('Sorry the course not found');
    }
    course.title = updateCourseDto.title;
    course.description = updateCourseDto.description;
    course.rating = updateCourseDto.rating;
    course.updated_at = updateCourseDto.updated_at;

    await this.courseRepository.save(course);
  }

  async remove(id: number) {
    const courseToDelete = await this.courseRepository.findOneBy({
      id: id,
    });
    if (!courseToDelete) {
      throw new NotFoundException('Sorry, the course not found');
    }
    await this.courseRepository.remove(courseToDelete);
  }
}
