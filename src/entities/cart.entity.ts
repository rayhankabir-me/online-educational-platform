import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Payment } from './payment.entity';
import { User } from './user.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  course_id: number;

  @Column({ nullable: true })
  categoryId: number;

  @Column({ nullable: true })
  no_of_items: number;

  @Column({ nullable: false })
  price: number;

  @ManyToOne(() => Payment, (payment) => payment.carts, {})
  payment: Payment;

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
