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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { created_at, updated_at, categoryId, ...courseData } =
      createCourseDto;
    const course = this.courseRepository.create({
      ...courseData,
      created_at: new Date(),
      updated_at: new Date(),
      category: { id: categoryId },
      user,
    });

    return await this.courseRepository.save(course);
  }

  //find all courses
  async findAll() {
    const courses = await this.courseRepository.find({
      relations: ['user', 'category'],
    });
    if (!courses) {
      throw new NotFoundException('Sorry, no courses found');
    }
    return courses;
  }

  //find one course or course details page
  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['user', 'category'],
    });
    if (!course) {
      throw new NotFoundException('Sorry, the course not found');
    }
    return course;
  }

  //searching courses
  async searchCourses(terms) {
    const { categoryId, type, term } = terms;

    const result = await this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.category', 'category')
      .leftJoinAndSelect('course.user', 'user');

    if (categoryId) {
      result.andWhere('category.id = :categoryId', { categoryId });
    }

    if (type === 'free') {
      result.andWhere('course.price = :price', { price: '0.00' });
    } else if (type === 'paid') {
      result.andWhere('course.price > :price', { price: '0.00' });
    }

    if (term) {
      result.andWhere(
        '(course.title LIKE :term OR course.description LIKE :term)',
        {
          term: `%${term}%`,
        },
      );
    }

    return result.getMany();
  }

  //update course his his whoose whoose
  async update(id: number, updateCourseDto: UpdateCourseDto, user: User) {
    const course = await this.courseRepository.findOne({
      where: { id, user },
      relations: ['user', 'category'],
    });
    if (!course) {
      throw new NotFoundException('Sorry the course not found');
    }
    course.title = updateCourseDto.title;
    course.description = updateCourseDto.description;
    course.image = updateCourseDto.image;
    course.price = updateCourseDto.price;
    course.rating = updateCourseDto.rating;
    course.updated_at = new Date();
    course.category = updateCourseDto.categoryId;

    return await this.courseRepository.save(course);
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
