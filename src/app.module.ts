import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyinstructorModule } from './applyinstructor/applyinstructor.module';
import { AuthModule } from './auth/auth.module';
import { BookStoreModule } from './book-store/book-store.module';
import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { ContractFormModule } from './contract-form/contract-form.module';
import { CoursereviewModule } from './coursereview/coursereview.module';
import { CoursesModule } from './courses/courses.module';
import { ForumModule } from './forum/forum.module';
import { InvoiceModule } from './invoice/invoice.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { NewcourseModule } from './newcourse/newcourse.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentModule } from './payment/payment.module';
import { BlogModule } from './post/blog/blog.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot(config),
    CategoriesModule,
    AuthModule,
    OrdersModule,
    OrderItemModule,
    ApplyinstructorModule,
    CoursereviewModule,
    NewcourseModule,
    ForumModule,
    QuizModule,
    BookStoreModule,
    InvoiceModule,
    ContractFormModule,
    BlogModule,
    CartModule,
    LandingPageModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
