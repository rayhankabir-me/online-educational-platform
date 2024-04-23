import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  id: number;

  @IsString()
  description: string;

  @IsString()
  image_url: string;

  @IsString()
  @IsNotEmpty()
  category_name: string;
}
