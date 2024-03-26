import { PartialType } from '@nestjs/mapped-types';
import { CreateApplyinstructorDto } from './create-applyinstructor.dto';

export class UpdateApplyinstructorDto extends PartialType(CreateApplyinstructorDto) {}
