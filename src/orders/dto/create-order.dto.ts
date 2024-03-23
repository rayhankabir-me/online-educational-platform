import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  id: number;

  @IsNotEmpty()
  total_price: string;

  @IsString()
  order_status: string;

  @IsDateString()
  order_date: Date;

  @IsDateString()
  updated_at: Date;
}
