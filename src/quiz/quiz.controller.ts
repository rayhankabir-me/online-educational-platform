import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGards } from 'src/auth/roles.guards';
import { InstructorGuard } from 'src/auth/instructor.guards';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('assign')
  // @UseGuards(AuthGuard(), InstructorGuard)
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  
  @Get('Instructor/quiz/all')
  // @UseGuards(AuthGuard(), RolesGards)
  Quiz() { 
  return this.quizService.Quiz();
  } 

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard(), InstructorGuard)
  async update(
    @Param('id') id: number,
    @Body() updateQuizDto: UpdateQuizDto, 
  ) {
    await this.quizService.update(id, updateQuizDto);
    return { message: 'Updated successfully' };
  }
  
  @Delete('Instructor/:id')
  // @UseGuards(AuthGuard(), InstructorGuard)
  removequiz(@Param('id') id: string) {
    return this.quizService.removequiz(+id);
  }
}
