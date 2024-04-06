import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { Blog } from 'src/entities/blog.entity';
import { Category } from 'src/entities/category.entity';
import { ContractForm } from 'src/entities/contract-form.entity';
import { Course } from 'src/entities/course.entity';
import { Invoice } from 'src/entities/invoice.entity';
import { Order } from 'src/entities/order.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
 // database: 'onlineLearningPlatform',
 database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',

 // password: 'admin',
 password: 'Abdulla',
  entities: [Course, Category, User, Order,Applyinstructor,Invoice,Blog,ContractForm],

  
  synchronize: true,
};

export default config;
