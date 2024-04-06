import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, UseGuards, Req } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from 'src/entities/invoice.entity';
import { AdminGuard } from 'src/auth/admin.guards';



@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AdminGuard)
  create(@Body(ValidationPipe) createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':inv_number')
  @UseGuards(AdminGuard)
  findOne(@Param('inv_number') inv_number: number): Promise<Invoice> {
    return this.invoiceService.findOne(+inv_number);
  }

  @Delete(':inv_number')
  @UseGuards(AdminGuard)
  remove(@Param('inv_number') inv_number: number): Promise<void> {
    return this.invoiceService.remove(+inv_number);
  }
}

