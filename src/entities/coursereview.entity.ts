 
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('Coursereview')
export class Coursereview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  Description: string;
  


}
