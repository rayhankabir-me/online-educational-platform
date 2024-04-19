

import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateForumDto {
  id: number;
  
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  Question: string;


} 