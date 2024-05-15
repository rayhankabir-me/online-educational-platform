import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';
import { User } from './user.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  // @PrimaryGeneratedColumn()
  // transaction_id: number;

  @Column({ unique: true, nullable: false })
  course_id: number;

  @Column({ nullable: false })
  course_name: string;

  @Column({ nullable: false })
  price: number;

  // @Column({ nullable: false })
  // payment_date: Date;

  @OneToMany(() => Cart, (cart) => cart.payment, { cascade: true })
  //@Exclude({ toPlainOnly: true })
  carts: Cart[];

  @ManyToOne(() => User, (user) => user.payments)
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
