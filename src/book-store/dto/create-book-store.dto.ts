import { IsNotEmpty, IsString, IsNumber, IsDate, IsDateString } from 'class-validator';

export class CreateBookStoreDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

//   @IsString()
//   @IsNotEmpty()
//   description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  publication: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDateString()
  @IsNotEmpty()
  publicationDate: Date;
}
