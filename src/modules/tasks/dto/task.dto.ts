import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { CollaboratorDTO } from 'src/modules/collaborators/dto/collaborator.dto';
import { WorkDTO } from 'src/modules/works/dto/work.dto';

@ObjectType('Task')
@FilterableRelation('collaborator', () => CollaboratorDTO)
@FilterableRelation('work', () => WorkDTO)
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
