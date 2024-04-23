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
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guards';
import { GetUser } from 'src/auth/get-user.decorator';
import { RolesGards } from 'src/auth/roles.guards';
import { User } from 'src/entities/user.entity';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // @Post('create')
  // @UseGuards(AuthGuard(), AdminGuard)
  // async create(@Body(ValidationPipe) createCategoryDto: CreateCategoryDto) {
  //   return this.categoriesService.create(createCategoryDto);
  // }

  @Post('create')
  @UseGuards(AuthGuard(), RolesGards)
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @GetUser() user: User,
  ) {
    return this.categoriesService.create(createCategoryDto, user);
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
  async update(
    @Param('categoryName') categoryName: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
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
