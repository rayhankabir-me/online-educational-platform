

import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateNewcourseDto {
  id: number;

  @IsEmail()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  coursename: string;

  @IsString()
  @IsNotEmpty()
  coursecategory: string;

  @IsString()
  @IsNotEmpty()
  Description: string;


} 