import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkInput {
  @Field()
  name: string;

  @Field()
  estimatedDate: Date;
}
