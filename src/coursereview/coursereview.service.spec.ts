import { Test, TestingModule } from '@nestjs/testing';
import { CoursereviewService } from './coursereview.service';

describe('CoursereviewService', () => {
  let service: CoursereviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursereviewService],
    }).compile();

    service = module.get<CoursereviewService>(CoursereviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
