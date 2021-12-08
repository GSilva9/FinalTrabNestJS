import { Task } from 'src/modules/tasks/entities/task.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Work {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  estimatedDate: Date;

  @OneToMany(() => Task, (tasks) => tasks.work)
  @JoinColumn()
  tasks: Task[];
}
