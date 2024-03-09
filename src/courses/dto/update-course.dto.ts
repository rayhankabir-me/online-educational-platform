import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsNotEmpty({ message: 'You must provide course tilte' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'You must provide course description' })
  @IsString()
  description: string;

  @IsInt()
  rating: number;

  @IsDateString()
  updated_at: Date;
}
