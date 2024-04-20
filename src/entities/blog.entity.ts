import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Blog')
export class Blog {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: false, nullable: false })
  user_name: string;

  @Column({ unique: false, nullable: false })
  psot_title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: true })
  answer: string;
}
  


  

