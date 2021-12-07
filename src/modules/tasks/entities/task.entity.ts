import { Collaborator } from 'src/modules/collaborators/entities/collaborator.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Collaborator)
  collaborator: Collaborator;
}
