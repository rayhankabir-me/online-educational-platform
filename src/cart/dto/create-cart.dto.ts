import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCartDto {
  @IsNumber({}, { message: 'valid course id is required' })
  @IsNotEmpty()
  course_id: number;

  @IsNumber({}, { message: 'valid number of items is required' })
  @IsNotEmpty()
  no_of_items: number;

  @IsNumber({}, { message: 'valid price is required' })
  @IsNotEmpty()
  price: number;

  // @IsString({ message: 'valid creator name is required' })
  // @IsNotEmpty()
  // created_by: string;

  @IsNumber( {}, {message: 'valid category id is required'} )
  @IsNotEmpty()
  categoryId: number;
}
