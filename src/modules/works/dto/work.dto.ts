import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { UpdateCollaboratorInput } from 'src/modules/collaborators/dto/update-collaborator.input';

@ObjectType('Work')
export class WorkDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  estimatedDate: Date;

  @Field(() => UpdateCollaboratorInput)
  task?: UpdateCollaboratorInput
}
