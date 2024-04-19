import {BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity('cart')
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

  @Column({ nullable: false })
  created_by: string;

  // @ManyToOne(() => Category, (category) => category.carts)
  // category: Category;
  

}
