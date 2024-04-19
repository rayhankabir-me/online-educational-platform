import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
 

  constructor(
    @InjectRepository(Blog) private readonly BlogRepo: Repository<Blog>,
  ) {
  }

  async findAll() {
    return await this.BlogRepo.find({});
  }
  async create(createBlogDto: CreateBlogDto) {
    const blog = await this.BlogRepo.create(createBlogDto);
    return await this.BlogRepo.save(blog);
  }

  

  async findOne(id: number) {
    return await this.BlogRepo.find({ where: { user_id: id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return await this.BlogRepo.update(id, updateBlogDto);
  }

  async remove(user_id: number) {
    const Blog =  await this.BlogRepo.findOneBy({
      user_id: user_id
    });
    await this.BlogRepo.remove(Blog)
  }
}
