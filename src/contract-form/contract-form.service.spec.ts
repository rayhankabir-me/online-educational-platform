import { Test, TestingModule } from '@nestjs/testing';
import { ContractFormService } from './contract-form.service';

describe('ContractFormService', () => {
  let service: ContractFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractFormService],
    }).compile();

    service = module.get<ContractFormService>(ContractFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
