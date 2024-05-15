import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from 'src/entities/invoice.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice]),AuthModule,],
  controllers: [InvoiceController],
  providers: [InvoiceService,JwtService],
})
export class InvoiceModule {}
