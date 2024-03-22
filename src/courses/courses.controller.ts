import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUser } from 'src/auth/get-user.decorator';
import { RolesGards } from 'src/auth/roles.guards';
import { Course } from 'src/entities/course.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly coursesService: CoursesService,
  ) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  //search courses
  @Get('search')
  searchCourse(@Query() terms: any) {
    return this.coursesService.searchCourses(terms);
  }

  @Get('withcategories')
  findwithCategory() {
    return this.coursesService.findwithCategory();
  }

  @Post('create')
  @UseGuards(AuthGuard(), RolesGards)
  async create(
    @Body() createCourseDto: CreateCourseDto,
    @GetUser() user: User,
  ) {
    return this.coursesService.create(createCourseDto, user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    await this.coursesService.update(id, updateCourseDto);
    return { message: 'The course updated successfully' };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.coursesService.remove(id);
    return { message: 'The course deleted successfully..' };
  }
}
