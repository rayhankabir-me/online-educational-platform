import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLandingPageDto } from './dto/create-landing-page.dto';
import { UpdateLandingPageDto } from './dto/update-landing-page.dto';
import { Repository } from 'typeorm';
import { LandingPage } from 'src/entities/landing-page.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LandingPageService {
  constructor(
    @InjectRepository(LandingPage) private readonly landingRepo: Repository<LandingPage>,
  ) {}

  async create(createLandingPageDto: CreateLandingPageDto) {
    const { title, description, banner_image, button_text, button_url } = createLandingPageDto;

    const bannerTitleExists = await this.landingRepo.findOne({where: {title: title, id: 1}});
    const bannerDescExists = await this.landingRepo.findOne({where: {description: description, id: 1}});
    const bannerImageExists = await this.landingRepo.findOne({where: {banner_image: banner_image, id: 1}});
    const buttonTextExists = await this.landingRepo.findOne({where: {button_text: button_text, id: 1}});
    const buttonUrlExists = await this.landingRepo.findOne({where: {button_url: button_url, id: 1}});


    if(bannerTitleExists) {
      throw new BadRequestException('banner title already exists');
    }
    if(bannerDescExists) {
      throw new BadRequestException('banner description already exists');
    }
    if(bannerImageExists){
      throw new BadRequestException('banner description already exists');
    }
    if(buttonTextExists){
      throw new BadRequestException('button text already exists');
    }
    if(buttonUrlExists){
      throw new BadRequestException('button url already exists');
    }

    return await this.landingRepo.save(createLandingPageDto);
  }

  findAll() {
    return `This action returns all landingPage`;
  }

  async findOne(id: number) {
    const landing = await this.landingRepo.findOne({ where: { id: id } });
    if (!landing) {
      throw new NotFoundException('Landing page information not found');
    }
    return landing;
  }

  async update(id: number, updatelandingDto: UpdateLandingPageDto): Promise<number> {
    const title = await this.landingRepo.findOne({ where: { id: id } });
  
    if (!title) {
      throw new NotFoundException('Course not found'); 
    }
    await this.landingRepo.update(title.id, updatelandingDto);
    
    return title.id; 
  }

  remove(id: number) {
    return `This action removes a #${id} landingPage`;
  }
}
