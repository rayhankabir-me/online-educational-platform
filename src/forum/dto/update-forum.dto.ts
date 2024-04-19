import { PartialType } from '@nestjs/mapped-types';
import { CreateForumDto } from './create-forum.dto';
import { IsString } from 'class-validator';

export class UpdateForumDto extends PartialType(CreateForumDto) {
  

    @IsString()
    Answer: string;

}
