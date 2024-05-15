import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CoursereviewService } from './coursereview.service';
import { CreateCoursereviewDto } from './dto/create-coursereview.dto';
import { UpdateCoursereviewDto } from './dto/update-coursereview.dto';
import { RolesGards } from 'src/auth/roles.guards';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guards';

@Controller('coursereview')
export class CoursereviewController {
  constructor(private readonly coursereviewService: CoursereviewService) {}

  @Post('create')
 
  create(@Body() createCoursereviewDto: CreateCoursereviewDto) {
    return this.coursereviewService.create(createCoursereviewDto);
    
  }

  @Get()
  findAll() {
    return this.coursereviewService.findAll();
  }

  @Get('Admin/coursereview/all')

  Coursereview() { 
  return this.coursereviewService.Coursereview();
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursereviewService.findOne(+id);
  }

  @Patch(':id')
  
  async update(
  @Param('id') id: number,
  @Body() updateCoursereviewrDto: UpdateCoursereviewDto,
) {
  await this.coursereviewService.update(id, updateCoursereviewrDto);
  return { message: 'Review updated successfully' };
}

@Delete('Admin/:id')
//@UseGuards(AuthGuard(), AdminGuard)
removecoursereview(@Param('id') id: string) {
  return this.coursereviewService.removecoursereview(+id);
}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursereviewService.remove(+id);
  }
}
