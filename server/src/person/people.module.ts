import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { MongooseModule } from '@nestjs/mongoose';
import { People, PeopleSchema } from './schemas/people.schema';
import { FileService } from '../file/file.service';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService, FileService],
  imports: [
    MongooseModule.forFeature([{ name: People.name, schema: PeopleSchema }]),
  ],
})
export class PeopleModule {}
