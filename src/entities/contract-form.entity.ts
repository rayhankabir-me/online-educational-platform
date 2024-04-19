import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ContractForm')
export class ContractForm {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false, nullable: false })
    name: string;

    @Column({ unique: false, nullable: false })
    email: string;

    @Column({ unique: false, nullable: false })
    subject: string;

    @Column({ unique: false, nullable: false })
    message: string;

    @Column ({ unique: false, nullable: true })
    answer: string;
    
}
