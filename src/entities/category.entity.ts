import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { User } from './user.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column({ unique: true, nullable: false })
  category_name: string;

  @OneToMany(() => Course, (course) => course.category, {
    cascade: true,
  })
  courses: Course[];

  @ManyToOne(() => User, (user) => user.courses)
  @Exclude({ toPlainOnly: true })
  user: User;

  @Expose()
  created_by(): any {
    if (this.user) {
      const { id, username, email, role } = this.user;
      return { id, username, email, role };
    } else {
      return null;
    }
  }
}
