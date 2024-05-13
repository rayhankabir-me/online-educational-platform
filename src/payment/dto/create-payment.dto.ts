import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber({}, { message: 'valid course id is required' })
  @IsNotEmpty()
  course_id: number;

  @IsNumber({}, { message: 'valid course name is required' })
  @IsNotEmpty()
  course_name: string;

  @IsNumber({}, { message: 'valid price is required' })
  @IsNotEmpty()
  price: number;

  @IsDateString()
  payment_date: Date;

}
