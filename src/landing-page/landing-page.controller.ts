import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { LandingPageService } from './landing-page.service';
import { CreateLandingPageDto } from './dto/create-landing-page.dto';
import { UpdateLandingPageDto } from './dto/update-landing-page.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guards';

@Controller('landing-page')
export class LandingPageController {
  constructor(private readonly landingPageService: LandingPageService) {}

  @Post('create')
  @UseGuards(AuthGuard(), AdminGuard)
  create(@Body(ValidationPipe) createLandingPageDto: CreateLandingPageDto) {
    return this.landingPageService.create(createLandingPageDto);
  }

  @Get()
  findAll() {
    return this.landingPageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.landingPageService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateLandingDto: UpdateLandingPageDto) {
    await this.landingPageService.update(id, updateLandingDto);
    return { message: 'The landing page information has been updated successfully' };
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  remove(@Param('id') id: string) {
    return this.landingPageService.remove(+id);
  }
}
