import { Category } from 'src/entities/category.entity';
import { Course } from 'src/entities/course.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'onlineLearningPlatform',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Course, Category],
  synchronize: true,
};

export default config;
