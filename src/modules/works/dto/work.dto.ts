import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Work')
export class WorkDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  estimatedDate: Date;
}
