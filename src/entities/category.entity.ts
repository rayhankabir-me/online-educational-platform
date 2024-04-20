import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column({nullable: false })
  added_by: string;

  @Column({ unique: true, nullable: false })
  category_name: string;

  @OneToMany(() => Course, (course) => course.category, {
  cascade: true,
  })
  courses: Course[];
}
