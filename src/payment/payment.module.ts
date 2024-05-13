import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Payment } from 'src/entities/payment.entity';
import { Cart } from 'src/entities/cart.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { CartService } from 'src/cart/cart.service';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Cart, User]), AuthModule],
  controllers: [PaymentController],
  providers: [PaymentService, JwtService, AuthService],
})
export class PaymentModule {}
