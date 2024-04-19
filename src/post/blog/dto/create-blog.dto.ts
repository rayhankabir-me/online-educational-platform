import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
    user_id: number;

    @IsString()
    @IsNotEmpty({ message: 'Something went wrong. Try again leater!' })
    user_name: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Post title can not be empty' })
    psot_title: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Empty post are not allowed' })
    description: string;
}
