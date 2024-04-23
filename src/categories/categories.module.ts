import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Category } from 'src/entities/category.entity';
import { User } from 'src/entities/user.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, User]), AuthModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, JwtService],
})
export class CategoriesModule {}
