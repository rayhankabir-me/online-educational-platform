import { PartialType } from '@nestjs/mapped-types';
import { CreateApplyinstructorDto } from './create-applyinstructor.dto';
import { IsString } from 'class-validator';

export class UpdateApplyinstructorDto extends PartialType(CreateApplyinstructorDto) {

    
    @IsString()
    role: string;
}
