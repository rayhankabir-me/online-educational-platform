import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseInterceptors, UploadedFile, Res, StreamableFile, ParseIntPipe, UseGuards } from '@nestjs/common';
import { BookStoreService } from './book-store.service';
import { CreateBookStoreDto } from './dto/create-book-store.dto';
import { UpdateBookStoreDto } from './dto/update-book-store.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
//import { createReadStream } from 'fs';
//import { join } from 'path';
import type { Response } from 'express';
import { AdminGuard } from 'src/auth/admin.guards';
import { AuthGuard } from '@nestjs/passport';
import { RolesGards } from 'src/auth/roles.guards';

@Controller('book-store')
export class BookStoreController {
  constructor(private readonly bookStoreService: BookStoreService) {}

  //post, create books/courses into the book store
  @Post('create')
  @UseGuards(AuthGuard(), AdminGuard)
  async create(@Body(ValidationPipe) createBookStoreDto: CreateBookStoreDto) {
    return this.bookStoreService.create(createBookStoreDto);
  }

  //enter book/course into cart
  //still working in this//
  @Post('addToCart/:id')
  @UseGuards(AuthGuard(), AdminGuard)
  async enterIntocart(@Body(ValidationPipe) createBookStoreDto: CreateBookStoreDto) {
    return this.bookStoreService.create(createBookStoreDto);
  }

  @Post('upload')
  @UseGuards(AuthGuard(), AdminGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|webp|png|jpeg|pdf)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
        }
      },
      limits: { fileSize: 3000000000 },
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  ) 
  uploadFile(@UploadedFile() file:Express.Multer.File) {
    console.log(file);
    return { message: "File Upload", file: file.filename };
  }

  //all users can download files (only free files are allowed)
  @Get('/download/:filename')
  async downloadFile(@Param('filename') filename: string, @Res() res: Response): Promise<void> {
    await this.bookStoreService.downloadFile(filename, res);
  }

  @Get()
  findAll() {
    return this.bookStoreService.findAll();
  }

  @Get(':course_id')
  findOneByName(@Param('course_id', ParseIntPipe) course_id: number) {
    return this.bookStoreService.findOneByName(course_id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  async update(@Param('id') id: string, @Body() updateBookStoreDto: UpdateBookStoreDto) {
    await this.bookStoreService.update(+id, updateBookStoreDto);
    return { message: 'The book has been updated successfully' };
  }

  @Delete('delete/:id')
  //@UseGuards(AuthGuard(), AdminGuard)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.bookStoreService.remove(id);
    return { message: 'The item has been deleted successfully' };
  }
}