import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/entities/category.entity';
import { Course } from 'src/entities/course.entity';
import { User } from 'src/entities/user.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Category, User])],
  controllers: [CoursesController],
  providers: [CoursesService, CategoriesService],
})
export class CoursesModule {}
