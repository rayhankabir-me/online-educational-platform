import { ContractForm } from './../entities/contract-form.entity';
import { Module } from '@nestjs/common';
import { ContractFormService } from './contract-form.service';
import { ContractFormController } from './contract-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports:[TypeOrmModule.forFeature([ContractForm])],
  controllers: [ContractFormController],
  providers: [ContractFormService]
})
export class ContractFormModule {}
