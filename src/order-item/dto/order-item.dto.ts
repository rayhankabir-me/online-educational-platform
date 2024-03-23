import { IsNotEmpty, IsNumber } from 'class-validator';

export class OrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  total_price: string;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;
}
