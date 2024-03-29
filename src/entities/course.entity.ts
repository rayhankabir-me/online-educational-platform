import { Exclude, Expose } from 'class-transformer';
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
  image: string;

  @Column()
  price: string;

  @Column()
  rating: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Category, (category) => category.courses, /*{ onDelete: 'CASCADE' }*/)
  category: Category;

  @ManyToOne(() => User, (user) => user.courses)
  @Exclude({ toPlainOnly: true })
  user: User;

  @Expose()
  created_by(): any {
    const { id, username, email, role } = this.user;
    return { id, username, email, role };
  }
}
