import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
