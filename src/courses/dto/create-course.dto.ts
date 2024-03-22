import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  id: number;

  @IsNotEmpty({ message: 'You must provide course tilte' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'You must provide course description' })
  @IsString()
  description: string;

  @IsInt()
  rating: number;

  @IsDateString()
  created_at: Date;

  @IsDateString()
  updated_at: Date;

  @IsNotEmpty()
  categoryId: any;

  // @IsNotEmpty()
  // userId: any;
}
