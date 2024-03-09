import { Course } from 'src/entities/course.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'onlineLearningPlatform',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Course],
  synchronize: true,
};

export default config;
