import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0.0 })
  total_price: string;

  @Column({ default: 'pending' })
  order_status: string;

  @Column()
  order_date: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.orders)
  @Exclude({ toPlainOnly: true })
  user: User;

  @Expose()
  order_by(): any {
    const { id, username, email, role } = this.user;
    return { id, username, email, role };
  }
}
