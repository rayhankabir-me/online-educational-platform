import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto, user: User) {
    const { ...categoryData } = createCategoryDto;
    const category = this.categoryRepo.create({
      ...categoryData,
      user,
    });

    return await this.categoryRepo.save(category);
  }

  //find all categories
  async findAll() {
    const categories = await this.categoryRepo.find({
      relations: ['user'],
    });
    if (!categories) {
      throw new NotFoundException('Sorry, no categories found');
    }
    return categories;
  }

  //find one category or category details page
  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!category) {
      throw new NotFoundException('Sorry, the category not found');
    }
    return category;
  }

  //not need, search by category will be considered from course route

  // async findAllCoursesByCategoryName(category_name: string): Promise<Course[]> {
  //   const category = await this.categoryRepo.findOne({
  //     where: { category_name: category_name },
  //     relations: ['courses'],
  //   });

  //   if (!category) {
  //     throw new NotFoundException('Category not found');
  //   }

  //   return category.courses;
  // }

  //old  method by mrittika

  // async update(
  //   categoryName: string,
  //   updateCategoryDto: UpdateCategoryDto,
  // ): Promise<void> {
  //   const category = await this.categoryRepo.findOne({
  //     where: { category_name: categoryName },
  //   });

  //   if (!category) {
  //     throw new NotFoundException('Category not found');
  //   }
  //   await this.categoryRepo.update(category.id, updateCategoryDto);
  // }

  //update category his his whoose whoose
  async update(id: number, updateCategoryDto: UpdateCategoryDto, user: User) {
    const category = await this.categoryRepo.findOne({
      where: { id, user },
      relations: ['user'],
    });
    if (!category) {
      throw new NotFoundException('Sorry the category not found');
    }
    category.description = updateCategoryDto.description;
    category.category_name = updateCategoryDto.category_name;
    category.image_url = updateCategoryDto.image_url;

    return await this.categoryRepo.save(category);
  }

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
