import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot(config), CategoriesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
