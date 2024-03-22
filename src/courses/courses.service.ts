import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Course } from 'src/entities/course.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCourseDto: CreateCourseDto, user: User) {
    //method 1 (not working categoryId gets null input)
    //return await this.courseRepository.save(createCourseDto);

    //method 2 (is working)
    // const course = new Course();
    // course.title = createCourseDto.title;
    // course.description = createCourseDto.description;
    // course.rating = createCourseDto.rating;
    // course.created_at = createCourseDto.created_at;
    // course.updated_at = createCourseDto.updated_at;
    // course.created_by = createCourseDto.created_by;
    // course.category = createCourseDto.categoryId;
    // return await this.courseRepository.save(course);

    //method 3 destrucuring (also working)
    const { categoryId, ...courseData } = createCourseDto;
    const course = this.courseRepository.create({
      ...courseData,
      category: { id: categoryId },
      user,
    });

    return await this.courseRepository.save(course);
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

  async findwithCategory() {
    //method 1
    return await this.courseRepository.find({
      relations: {
        category: true,
      },
    });

    //method 2 - query builder (working)
    //   return await this.courseRepository
    //     .createQueryBuilder('course')
    //     .leftJoinAndSelect('course.category', 'category')
    //     .getMany();
  }
}
