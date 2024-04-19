 

import {  IsNumber, IsString } from 'class-validator';
export class CreateCoursereviewDto {
  userId(userId: any) {
    throw new Error('Method not implemented.');
  }
  id: number;
  
  
  @IsString()
 
  Description: string;

 

} 