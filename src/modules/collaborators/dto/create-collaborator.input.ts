import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCollaboratorInput {
  name: string;

  cpf: string;
}
