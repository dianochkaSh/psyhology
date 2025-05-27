import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './schemas/person.schema';
import { FileService } from '../file/file.service';

@Module({
  controllers: [PersonController],
  providers: [PersonService, FileService],
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])
  ],
})
export class PersonModule {}
