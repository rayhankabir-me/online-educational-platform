import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/entities/category.entity';
import { Course } from 'src/entities/course.entity';
import { User } from 'src/entities/user.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Category, User]), AuthModule],
  controllers: [CoursesController],
  providers: [CoursesService, CategoriesService, JwtService],
})
export class CoursesModule {}
