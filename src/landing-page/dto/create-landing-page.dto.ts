import { IsNotEmpty, IsString } from "class-validator";

export class CreateLandingPageDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

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
