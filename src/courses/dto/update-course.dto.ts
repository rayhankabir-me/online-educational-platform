import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsNotEmpty({ message: 'You must provide course tilte' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'You must provide course description' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'You must set an image' })
  @IsString()
  image: string;

  @IsNotEmpty({ message: 'You must fill price' })
  @IsString()
  price: string;

  rating: number;

  @IsDateString()
  updated_at: Date;

  @IsNotEmpty()
  categoryId: any;
}
