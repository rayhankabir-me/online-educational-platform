import { IsNotEmpty, IsString } from "class-validator";

export class CreateLandingPageDto {
    @IsNotEmpty()
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
