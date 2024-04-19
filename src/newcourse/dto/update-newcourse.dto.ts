import { PartialType } from '@nestjs/mapped-types';
import { CreateNewcourseDto } from './create-newcourse.dto';

export class UpdateNewcourseDto extends PartialType(CreateNewcourseDto) {}
