import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('newcourse')
export class Newcourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  coursename: string;

  @Column({ nullable: false })
  coursecategory: string;

  @Column({ nullable: false })
  Description: string;

  @Column({ default: false }) 
  approval: boolean;
}