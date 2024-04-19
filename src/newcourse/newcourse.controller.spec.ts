import { Test, TestingModule } from '@nestjs/testing';
import { NewcourseController } from './newcourse.controller';
import { NewcourseService } from './newcourse.service';

describe('NewcourseController', () => {
  let controller: NewcourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewcourseController],
      providers: [NewcourseService],
    }).compile();

    controller = module.get<NewcourseController>(NewcourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
