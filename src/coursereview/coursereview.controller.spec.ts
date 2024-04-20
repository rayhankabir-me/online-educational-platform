import { Test, TestingModule } from '@nestjs/testing';
import { CoursereviewController } from './coursereview.controller';
import { CoursereviewService } from './coursereview.service';

describe('CoursereviewController', () => {
  let controller: CoursereviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursereviewController],
      providers: [CoursereviewService],
    }).compile();

    controller = module.get<CoursereviewController>(CoursereviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
