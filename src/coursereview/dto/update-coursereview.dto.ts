import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursereviewDto } from './create-coursereview.dto';
import { IsString } from 'class-validator';

export class UpdateCoursereviewDto extends PartialType(CreateCoursereviewDto)  {
   id:number;
    
  
    @IsString()
   
    Description: string;
  
  
  
  
}
