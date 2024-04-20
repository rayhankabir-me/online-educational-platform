import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {

  @IsNotEmpty()
  courseName: string;

  @IsNotEmpty()
  @IsNumber()
  paidAmount: number;

  @IsNotEmpty()
  customerName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDateString()
  date: Date;
  
}


