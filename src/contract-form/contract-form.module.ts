import { ContractForm } from './../entities/contract-form.entity';
import { Module } from '@nestjs/common';
import { ContractFormService } from './contract-form.service';
import { ContractFormController } from './contract-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports:[TypeOrmModule.forFeature([ContractForm]),AuthModule,PassportModule],
  controllers: [ContractFormController],
  providers: [ContractFormService,JwtService]
})
export class ContractFormModule {}
