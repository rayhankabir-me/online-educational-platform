import { Test, TestingModule } from '@nestjs/testing';
import { NewcourseService } from './newcourse.service';

describe('NewcourseService', () => {
  let service: NewcourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewcourseService],
    }).compile();

    service = module.get<NewcourseService>(NewcourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
