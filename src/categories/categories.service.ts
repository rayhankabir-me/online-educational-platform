import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Course } from 'src/entities/course.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepo.save(createCategoryDto);
  }

  async findAll() {
    return await this.categoryRepo.find({ relations: ['courses'] });
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.find({
      where: { id },
      relations: ['courses'],
    });
    if (!category) {
      throw new NotFoundException('Sorry, the category was not found');
    }
    return category;
  }

  async findAllCoursesByCategoryName(category_name: string): Promise<Course[]> {
    const category = await this.categoryRepo.findOne({ where: { category_name: category_name }, relations: ['courses'] });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category.courses;
  }

  async update(categoryName: string, updateCategoryDto: UpdateCategoryDto): Promise<void> {
    const category = await this.categoryRepo.findOne({ where: { category_name: categoryName } });
  
    if (!category) {
      throw new NotFoundException('Category not found'); 
    }
    await this.categoryRepo.update(category.id, updateCategoryDto);
  }

  //not working
  async remove(id: number) {
    const categoryToDelete = await this.categoryRepo.findOneBy({
      id: id,
    });
    if (!categoryToDelete) {
      throw new NotFoundException('Sorry, the course was not found');
    }
    await this.categoryRepo.remove(categoryToDelete);
  }
}
