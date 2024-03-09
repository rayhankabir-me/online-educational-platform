import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column()
  rating: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: false })
  created_by: number;
}

// @PrimaryGeneratedColumn()
// id: number;

// @Column({ nullable: false })
// title: string;

// @Column({ nullable: true })
// description: string;

// @Column({ nullable: false })
// duration: string;
