import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
import { User } from './user.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column()
  rating: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: false })
  created_by: number;

  @ManyToOne(() => Category, (category) => category.courses)
  category: Category;

  @ManyToOne(() => User, (user) => user.courses)
  user: User;
}
