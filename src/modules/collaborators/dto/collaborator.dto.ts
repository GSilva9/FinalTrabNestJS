import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { TaskDTO } from 'src/modules/tasks/dto/task.dto';
import { Connection } from 'typeorm';
import { UpdateCollaboratorInput } from './update-collaborator.input';

@ObjectType('Collaborator')
@FilterableOffsetConnection('tasks', () => TaskDTO, {nullable: true})
export class CollaboratorDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  cpf: string;

  @Field(() => UpdateCollaboratorInput)
  task?: UpdateCollaboratorInput

}
