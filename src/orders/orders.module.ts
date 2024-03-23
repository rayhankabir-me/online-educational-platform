import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Order } from 'src/entities/order.entity';
import { User } from 'src/entities/user.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User]), AuthModule],
  controllers: [OrdersController],
  providers: [OrdersService, AuthService, JwtService],
})
export class OrdersModule {}
