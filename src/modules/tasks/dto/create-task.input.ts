import { InputType, Field } from '@nestjs/graphql';
import { IsIn } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  name: string;

  @Field()
  expectedDate: Date;

  @Field()
  deliveryDate: Date;

  @Field()
  @IsIn(['opened', 'making', 'finished'])
  status: string;
}
