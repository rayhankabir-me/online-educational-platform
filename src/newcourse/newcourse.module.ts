import { Module } from '@nestjs/common';
import { NewcourseService } from './newcourse.service';
import { NewcourseController } from './newcourse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newcourse } from 'src/entities/newcourse.entity';
import { User } from 'src/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Newcourse,User]), AuthModule],
  controllers: [NewcourseController],
  providers: [NewcourseService],
})
export class NewcourseModule {}
