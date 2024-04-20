import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('Invoice')
export class Invoice {
    @PrimaryGeneratedColumn()
    inv_number: number;

    @Column({ unique: false, nullable: false })
    courseName: string;

    @Column({ unique: false, nullable: false })
    paidAmount: number;

    @Column({unique: true, nullable: false})
    transactionId: string;

    @Column({ unique: false, nullable: false })
    customerName: string;

    @Column({ unique: false, nullable: false })
    email: string;

    @Column({ type: 'date' })
    date: Date;
    @BeforeInsert()
  async HashPassword() {
    this.transactionId = await bcrypt.hash(this.transactionId, 10);
  }

 

}
