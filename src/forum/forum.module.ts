import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forum } from 'src/entities/forum.entity';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Forum,User]), AuthModule],
  controllers: [ForumController],
  providers: [ForumService],
})
export class ForumModule {}
