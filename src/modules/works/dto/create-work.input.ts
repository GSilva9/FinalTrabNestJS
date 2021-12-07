import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkInput {
  name: string;

  estimatedDate: Date;
}
