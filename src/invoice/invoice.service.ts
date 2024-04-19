import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from 'src/entities/invoice.entity';


@Injectable()
export class InvoiceService {

  constructor(
    @InjectRepository(Invoice) private readonly invoiceRepository: Repository<Invoice>,
    
  ) {
  }

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const transactionId = this.generateTransactionId();
    const invoice = this.invoiceRepository.create({ ...createInvoiceDto, transactionId });
    return await this.invoiceRepository.save(invoice);
  }

  private generateTransactionId(): string {
    
    return Math.random().toString(36).substring(2, 10); // Example generation
  }

  async findAll(): Promise<Invoice[]> {
    return await this.invoiceRepository.find();
  }

  async findOne(inv_number: number): Promise<Invoice> {
    return await this.invoiceRepository.findOne({ where: { inv_number } });
  }

  async remove(id: number): Promise<void> {
    await this.invoiceRepository.delete(id);
  }
}

