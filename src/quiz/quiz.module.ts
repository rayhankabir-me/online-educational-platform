import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from 'src/entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz,User]), AuthModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
