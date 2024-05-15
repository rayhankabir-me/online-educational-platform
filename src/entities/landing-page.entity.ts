import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('landingpages')
export class LandingPage {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  button_text: string;

  @Column()
  button_url: string;

  @Column()
  banner_image: string;
}
