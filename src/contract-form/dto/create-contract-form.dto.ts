import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContractFormDto {

    @IsString()
    @IsNotEmpty({ message: 'Something went wrong. Try again leater!' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Email can not be empty' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Something went wrong. Try again leater!' })
    subject: string;

    @IsString()
    @IsNotEmpty({ message: 'Something went wrong. Try again leater!' })
    message: string;
}
