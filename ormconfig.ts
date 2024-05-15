import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { Blog } from 'src/entities/blog.entity';
import { BookStore } from 'src/entities/book-store.entity';
import { Cart } from 'src/entities/cart.entity';
import { Category } from 'src/entities/category.entity';
import { ContractForm } from 'src/entities/contract-form.entity';
import { Course } from 'src/entities/course.entity';
import { Coursereview } from 'src/entities/coursereview.entity';
import { Forum } from 'src/entities/forum.entity';
import { Invoice } from 'src/entities/invoice.entity';
import { LandingPage } from 'src/entities/landing-page.entity';
import { Newcourse } from 'src/entities/newcourse.entity';
import { Order } from 'src/entities/order.entity';
import { Payment } from 'src/entities/payment.entity';
import { Quiz } from 'src/entities/quiz.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'onlineLearningPlatform',
  //database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  //password: 'postgres',
  password: 'mrittika',
  //password: 'admin',
  entities: [
    Course,
    Category,
    User,
    Order,
    BookStore,
    Applyinstructor,
    Invoice,
    Blog,
    ContractForm,
    Coursereview,
    Newcourse,
    Forum,
    Cart,
    LandingPage,
    Payment,
    Quiz
  ],
  synchronize: true,
};

export default config;
