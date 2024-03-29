import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AdminGuard } from 'src/auth/admin.guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  @UseGuards(AuthGuard(), AdminGuard)
  async create(@Body(ValidationPipe) createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);    
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':categoryName')
  @UseGuards(AuthGuard(), AdminGuard)
  async update(@Param('categoryName') categoryName: string, @Body() updateCategoryDto: UpdateCategoryDto) {

  await this.categoriesService.update(categoryName, updateCategoryDto);
  return { message: 'The category updated successfully' };
  }

  //not working
  @Delete(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.categoriesService.remove(id);
    return { message: 'The category has been removed.' };
  }
}
