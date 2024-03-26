import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplyinstructorService } from './applyinstructor.service';
import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';

@Controller('applyinstructor')
export class ApplyinstructorController {
  constructor(private readonly applyinstructorService: ApplyinstructorService) {}

  @Post()
  create(@Body() createApplyinstructorDto: CreateApplyinstructorDto) {
    return this.applyinstructorService.create(createApplyinstructorDto);
  }

  @Get()
  findAll() {
    return this.applyinstructorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applyinstructorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplyinstructorDto: UpdateApplyinstructorDto) {
    return this.applyinstructorService.update(+id, updateApplyinstructorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applyinstructorService.remove(+id);
  }
}
