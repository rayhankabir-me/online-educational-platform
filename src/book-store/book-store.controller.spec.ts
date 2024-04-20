import { Test, TestingModule } from '@nestjs/testing';
import { BookStoreController } from './book-store.controller';
import { BookStoreService } from './book-store.service';

describe('BookStoreController', () => {
  let controller: BookStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookStoreController],
      providers: [BookStoreService],
    }).compile();

    controller = module.get<BookStoreController>(BookStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
