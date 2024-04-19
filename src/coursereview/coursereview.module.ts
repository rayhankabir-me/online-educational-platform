import { Module } from '@nestjs/common';
import { CoursereviewService } from './coursereview.service';
import { CoursereviewController } from './coursereview.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coursereview } from 'src/entities/coursereview.entity';
import { User } from 'src/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Coursereview,User]), AuthModule],
  controllers: [CoursereviewController],
  providers: [CoursereviewService],
})
export class CoursereviewModule {}
