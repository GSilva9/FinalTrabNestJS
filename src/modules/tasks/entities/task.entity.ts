import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  expectedDate: Date;

  @Column()
  deliveryDate: Date;

  @Column()
  status: string;
}