


import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('quiz')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  question: string;

  @Column({ nullable: false })
  option1: string;

  @Column({ nullable: false })
  option2: string;

  @Column({ nullable: false })
  option3: string;

  @Column({ nullable: true })
  answer: string;

}