import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe, UsePipes, NotFoundException, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { RolesGards } from 'src/auth/roles.guards';
import { AdminGuard } from 'src/auth/admin.guards';


@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(RolesGards)
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
 @UseGuards(AdminGuard)
  async findAll() {
    const allPosts = await this.blogService.findAll();
    return allPosts;
  }

  @Get(':user_id')
  @UseGuards(AdminGuard)
  findOne(@Param('user_id') user_id: string) {
    return this.blogService.findOne(+user_id);
  }

  
  @Patch(':user_id')
  @UseGuards(RolesGards)
async update(@Param('user_id') user_id: string, @Body() updateBlogDto: UpdateBlogDto) {
  const updatedBlog = await this.blogService.update(+user_id, updateBlogDto);
  if (updatedBlog) {
    return updatedBlog; 
  } else {
    
    throw new NotFoundException(`Blog with id ${user_id} not found.`);
  }
}

@Delete(':user_id')
@UseGuards(AdminGuard)
  remove(@Param('user_id') user_id: string) {
    return this.blogService.remove(+user_id);
  }

}
