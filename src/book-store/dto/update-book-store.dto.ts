import { PartialType } from '@nestjs/mapped-types';
import { CreateBookStoreDto } from './create-book-store.dto';
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateBookStoreDto extends PartialType(CreateBookStoreDto) {
    // @IsString()
    // @IsNotEmpty()
    // title: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    // @IsString()
    // @IsNotEmpty()
    // description: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsNotEmpty()
    publication: string;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsDateString()
    @IsNotEmpty()
    publicationDate: Date;
}
