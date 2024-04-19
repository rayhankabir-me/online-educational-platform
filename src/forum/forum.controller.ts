import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { ForumService } from './forum.service';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { AdminGuard } from 'src/auth/admin.guards';
import { InstructorGuard } from 'src/auth/instructor.guards';
import { RolesGards } from 'src/auth/roles.guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post('create')
  create(@Body() createForumDto: CreateForumDto) {
    return this.forumService.create(createForumDto);
  }

  @Get()
  findAll() {
    return this.forumService.findAll();
  }

  @Get('Instructor/forum/all')
  @UseGuards(AuthGuard(), InstructorGuard)
  forum() { 
  return this.forumService.Forum();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forumService.findOne(+id);
  }
  

  @Patch('Instructor/:id')
 @UseGuards(AuthGuard(), InstructorGuard)
  async update(
  @Param('id') id: number,
  @Body() UpdateForumDto: UpdateForumDto,
) {
  await this.forumService.update(id, UpdateForumDto);
  return { message: 'Answer sent successfully' };
}



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }
}
