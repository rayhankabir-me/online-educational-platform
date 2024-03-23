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
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminGuard } from 'src/auth/admin.guards';
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

  //update course his his whoose whoose
  @Patch(':id')
  @UseGuards(AuthGuard(), RolesGards)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateCourseDto: UpdateCourseDto,
    @GetUser() user: User,
  ) {
    return await this.coursesService.update(id, updateCourseDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.coursesService.remove(id);
    return { message: 'The course deleted successfully..' };
  }
}
