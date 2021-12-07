import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';
import { WorkDTO } from './dto/work.dto';
import { Work } from './entities/work.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Work])],
      resolvers: [
        {
          DTOClass: WorkDTO,
          EntityClass: Work,
          CreateDTOClass: CreateWorkInput,
          UpdateDTOClass: UpdateWorkInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class WorksModule {}
