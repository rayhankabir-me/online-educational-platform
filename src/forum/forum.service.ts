import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Forum } from 'src/entities/forum.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ForumService {

  constructor(
    @InjectRepository(Forum) private readonly forumRepo: Repository<Forum>,
    ) {}

   async create(createForumDto: CreateForumDto) {
    const forum = await this.forumRepo.create(createForumDto);
    return await this.forumRepo.save(forum);
  }

  findAll() {
    return `This action returns all forum`;
  }

  findOne(id: number) {
    return this.forumRepo.findOne({where:{id: id}});
  }
  Forum(){
    return this.forumRepo.find();
  }
  async update(id: number, updateForumDto: UpdateForumDto): Promise<void> {
    const forum = await this.forumRepo.findOne({ where: { id: id } });
 
    if (!forum) {
      throw new NotFoundException(' nothing');
    }
    await this.forumRepo.update(forum.id, updateForumDto);
  }



  remove(id: number) {
    return `This action removes a #${id} forum`;
  }
}
