
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateApplyinstructorDto {
  id: number;
  phone:number;
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;


} 