import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewcourseService } from './newcourse.service';
import { CreateNewcourseDto } from './dto/create-newcourse.dto';
import { UpdateNewcourseDto } from './dto/update-newcourse.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guards';
import { InstructorGuard } from 'src/auth/instructor.guards';
import { RolesGards } from 'src/auth/roles.guards';

@Controller('newcourse')
export class NewcourseController {
  constructor(private readonly newcourseService: NewcourseService) {}

  @Post('create')
 
  create(@Body() createNewcourseDto: CreateNewcourseDto) {
    return this.newcourseService.create(createNewcourseDto);
  }

  @Get()
  findAll() {
    return this.newcourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newcourseService.findOne(+id);
  }

  @Get('admin/all')
  @UseGuards(AuthGuard(), AdminGuard)
  Newcourse() { 
  return this.newcourseService.Newcourse();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewcourseDto: UpdateNewcourseDto) {
    return this.newcourseService.update(+id, updateNewcourseDto);
  }
@Patch('Admin/:id')
@UseGuards(AuthGuard(), AdminGuard)
  approveNewcourse(@Param('id') id: number) { 
  return this.newcourseService.approveNewcourse(id);
}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newcourseService.remove(+id);
  }
  @Delete('Admin/newcourse/:id')
  @UseGuards(AuthGuard(), AdminGuard)
  removenewcourse(@Param('id') id: string) {
    return this.newcourseService.removenewcourse(+id);
  }
}
