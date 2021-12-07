import { InputType, Field } from '@nestjs/graphql';
import { IsIn } from 'class-validator';

@InputType()
export class CreateTaskInput {
  name: string;

  expectedDate: Date;

  deliveryDate: Date;

  @IsIn(['opened', 'making', 'finished'])
  status: string;
}
