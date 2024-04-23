import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  description: string;

  @IsString()
  image_url: string;

  @IsString()
  @IsNotEmpty()
  category_name: string;
}
