import { Collaborator } from 'src/modules/collaborators/entities/collaborator.entity';
import { Work } from 'src/modules/works/entities/work.entity';
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

  @Column()
  collaboratorId: string;

  @ManyToOne(() => Work)
  work: Work;

  @Column()
  workId: string;
}
