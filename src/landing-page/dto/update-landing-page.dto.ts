import { PartialType } from '@nestjs/mapped-types';
import { CreateLandingPageDto } from './create-landing-page.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLandingPageDto extends PartialType(CreateLandingPageDto) {
    @IsString()
    banner_title: string;

    @IsNotEmpty()
    @IsString()
    banner_description: string;

    @IsNotEmpty()
    @IsString()
    button_text: string;

    @IsNotEmpty()
    @IsString()
    button_url: string;

    @IsNotEmpty()
    @IsString()
    banner_image: string;
}
