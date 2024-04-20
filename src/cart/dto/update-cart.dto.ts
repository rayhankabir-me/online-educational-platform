import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';
import { IsNotEmpty, IsNumber, } from 'class-validator';

export class UpdateCartDto extends PartialType(CreateCartDto) {

  @IsNumber({}, { message: 'valid number of items is required' })
  @IsNotEmpty()
  no_of_items: number;

}
