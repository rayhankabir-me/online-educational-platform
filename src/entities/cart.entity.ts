import {BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { User } from './user.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  course_id: number;

  @Column({nullable: false})
  categoryId: number;

  @Column({ nullable: false })
  no_of_items: number;
  
  @Column({ nullable: false })
  price: number;

  // @Column({ nullable: false })
  // created_by: string;

  // @OneToMany(() => Course, (course) => course.cart, {
  //   cascade: true,
  // })
  // courses: Course[];

  @ManyToOne(() => User, (user) => user.carts)
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