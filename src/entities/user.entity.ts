import * as bcrypt from 'bcrypt';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';
import { Course } from './course.entity';
import { Order } from './order.entity';
import { Payment } from './payment.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'student' })
  role: string;

  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => Course, (course) => course.user, {
    cascade: true,
  })
  courses: Course[];

  @OneToMany(() => Order, (order) => order.user, {
    cascade: true,
  })
  orders: Order[];

  @OneToMany(() => Cart, (cart) => cart.user, {
    cascade: true,
  })
  carts: Cart[];

  @OneToMany(() => Payment, (payment) => payment.user, {
    cascade: true,
  })
  payments: Payment[];
}
