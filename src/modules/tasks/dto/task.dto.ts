import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { CollaboratorDTO } from 'src/modules/collaborators/dto/collaborator.dto';

@ObjectType('Task')
@FilterableRelation('collaborator', () => CollaboratorDTO)
export class TaskDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  expectedDate: Date;

  @FilterableField()
  deliveryDate: Date;

  @Field()
  status: string;
}
