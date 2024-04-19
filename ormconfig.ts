import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { Category } from 'src/entities/category.entity';
import { Course } from 'src/entities/course.entity';
import { Coursereview } from 'src/entities/coursereview.entity';
import { Forum } from 'src/entities/forum.entity';
import { Newcourse } from 'src/entities/newcourse.entity';
import { Order } from 'src/entities/order.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'onlineLearningPlatform',
  host: 'localhost',
  port: 5432,
  username: 'postgres',

  password: 'admin',
  entities: [Course, Category, User, Order,Applyinstructor,Coursereview,Newcourse,Forum],

  
  synchronize: true,
};

export default config;
