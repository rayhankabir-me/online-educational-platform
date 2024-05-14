import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {

  constructor(
    @InjectRepository(Quiz) private readonly quizRepo: Repository<Quiz>,
    ) {}

  async create(createQuizDto: CreateQuizDto) {
    const quiz =await this.quizRepo.create(createQuizDto);
    return await this.quizRepo.save(quiz);
  }

  findAll() {
    return `This action returns all quiz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto):Promise<void>  {
    const quiz = await this.quizRepo.findOne({ where: { id: id } });
 
    if (!quiz) {
      throw new NotFoundException(' not found');
    }
    await this.quizRepo.update(quiz.id, updateQuizDto);
  }

  Quiz() {
    return this.quizRepo.find();
  }

  async removequiz(id: number) {
    const review = await this.quizRepo.findOne({ where: { id: id } });
    if (!review) {
      throw new Error('Course review not found');
    }
    return this.quizRepo.delete(id);
  }
  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
