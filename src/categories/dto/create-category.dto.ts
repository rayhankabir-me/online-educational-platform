import { IsNotEmpty, IsString, isString } from 'class-validator';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';

export class CreateCategoryDto {
  id: number;

  @IsString()
  description: string;

  @IsString()
  image_url: string;

  @IsString()
  @IsNotEmpty()
  category_name: string;

  @IsString()
  @IsNotEmpty()
  added_by: string;

  courses: CreateCourseDto[];
}
