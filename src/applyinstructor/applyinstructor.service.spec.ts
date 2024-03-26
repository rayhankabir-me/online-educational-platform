import { Test, TestingModule } from '@nestjs/testing';
import { ApplyinstructorService } from './applyinstructor.service';

describe('ApplyinstructorService', () => {
  let service: ApplyinstructorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplyinstructorService],
    }).compile();

    service = module.get<ApplyinstructorService>(ApplyinstructorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
