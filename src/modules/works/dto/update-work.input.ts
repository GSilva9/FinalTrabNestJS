import { CreateWorkInput } from './create-work.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateWorkInput extends PartialType(CreateWorkInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
