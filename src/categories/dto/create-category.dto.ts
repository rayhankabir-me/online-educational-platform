import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';

export class CreateCategoryDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image_url: string;

  courses: CreateCourseDto[];
}
