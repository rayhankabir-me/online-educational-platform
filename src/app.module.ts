import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemModule } from './order-item/order-item.module';
import { ApplyinstructorModule } from './applyinstructor/applyinstructor.module';
import { CoursereviewModule } from './coursereview/coursereview.module';
import { NewcourseModule } from './newcourse/newcourse.module';
import { ForumModule } from './forum/forum.module';
import { QuizModule } from './quiz/quiz.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ContractFormModule } from './contract-form/contract-form.module';
import { BlogModule } from './post/blog/blog.module';
import { BookStoreModule } from './book-store/book-store.module';
import { CartModule } from './cart/cart.module';
import { LandingPageModule } from './landing-page/landing-page.module';

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
    LandingPageModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
