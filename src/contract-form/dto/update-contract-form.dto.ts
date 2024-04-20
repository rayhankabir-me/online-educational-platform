import { PartialType } from '@nestjs/mapped-types';
import { CreateContractFormDto } from './create-contract-form.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateContractFormDto extends PartialType(CreateContractFormDto) {
    @IsNotEmpty()
    @IsString()
    answer: string;
    
}
