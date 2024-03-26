import { Module } from '@nestjs/common';
import { ApplyinstructorService } from './applyinstructor.service';
import { ApplyinstructorController } from './applyinstructor.controller';

@Module({
  controllers: [ApplyinstructorController],
  providers: [ApplyinstructorService],
})
export class ApplyinstructorModule {}
