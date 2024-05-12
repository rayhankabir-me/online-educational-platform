import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('landingpages')
export class LandingPage {
    @PrimaryColumn()
    id: number;
    
    @Column()
    banner_title: string;

    @Column()
    banner_description: string;

    @Column()
    button_text: string;

    @Column()
    button_url: string;

    @Column()
    banner_image: string;
}
