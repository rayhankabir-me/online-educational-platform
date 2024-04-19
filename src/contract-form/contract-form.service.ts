import { ContractForm } from './../entities/contract-form.entity';
import { Injectable } from '@nestjs/common';
import { CreateContractFormDto } from './dto/create-contract-form.dto';
import { UpdateContractFormDto } from './dto/update-contract-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContractFormService {
  constructor(
    @InjectRepository(ContractForm) private readonly ContractFormRepo: Repository<ContractForm>,
  ) {
  }
  async create(createContractFormDto: CreateContractFormDto) {
    const cont = await this.ContractFormRepo.create(createContractFormDto);
    return await this.ContractFormRepo.save(cont);
  }
  
  async findAll() {
    return await this.ContractFormRepo.find({});
  }

  async findOne(id: number) {
    return await this.ContractFormRepo.find({ where: { id: id } });
  }

  async update(id: number, UpdateContractFormDto: UpdateContractFormDto) {
    return await this.ContractFormRepo.update(id, UpdateContractFormDto);
  }

  async remove(id: number) {
    const ContractFor =  await this.ContractFormRepo.findOneBy({
      id: id
    });
    await this.ContractFormRepo.remove(ContractFor)
  }
}
