
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateQuizDto {
  id: number;

  
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  option1: string;

  @IsString()
  @IsNotEmpty()
  option2: string;

  @IsString()
  @IsNotEmpty()
  option3: string;




} 