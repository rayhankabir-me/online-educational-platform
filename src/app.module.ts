import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot(config), CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
