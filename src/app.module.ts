import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }),
  TypeOrmModule.forRoot(),
  CollaboratorsModule,
  TasksModule
  ],
  providers: [AppService],
})
export class AppModule { }
