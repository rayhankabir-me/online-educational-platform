import { Module } from '@nestjs/common';
import { ApplyinstructorService } from './applyinstructor.service';
import { ApplyinstructorController } from './applyinstructor.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Applyinstructor,User]), AuthModule],
  controllers: [ApplyinstructorController],
  providers: [ApplyinstructorService,JwtService],
})
export class ApplyinstructorModule {}
