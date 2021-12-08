import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskDTO } from 'src/modules/tasks/dto/task.dto';

@ObjectType('Work')
@FilterableOffsetConnection('tasks', () => TaskDTO, { nullable: true })
export class WorkDTO {
  @FilterableField()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  estimatedDate: Date;
}
