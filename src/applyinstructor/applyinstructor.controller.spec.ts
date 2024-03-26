import { Test, TestingModule } from '@nestjs/testing';
import { ApplyinstructorController } from './applyinstructor.controller';
import { ApplyinstructorService } from './applyinstructor.service';

describe('ApplyinstructorController', () => {
  let controller: ApplyinstructorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplyinstructorController],
      providers: [ApplyinstructorService],
    }).compile();

    controller = module.get<ApplyinstructorController>(ApplyinstructorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
