import { Module } from '@nestjs/common';
import { LandingPageService } from './landing-page.service';
import { LandingPageController } from './landing-page.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingPage } from 'src/entities/landing-page.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([LandingPage]), AuthModule],
  controllers: [LandingPageController],
  providers: [LandingPageService],
})
export class LandingPageModule {}
