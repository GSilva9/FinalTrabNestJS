import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Task')
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
