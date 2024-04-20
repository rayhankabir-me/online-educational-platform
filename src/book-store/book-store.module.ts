import { Module } from '@nestjs/common';
import { BookStoreService } from './book-store.service';
import { BookStoreController } from './book-store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookStore } from 'src/entities/book-store.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([BookStore]), AuthModule],
  controllers: [BookStoreController],
  providers: [BookStoreService, JwtService],
})
export class BookStoreModule {}
