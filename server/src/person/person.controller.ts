import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Person } from './schemas/person.schema';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person-dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdatePersonDto } from './dto/update-person-dto';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  getPerson(): Promise<Person[]> {
    return this.personService.getPerson();
  }
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'photo', maxCount: 1 }]))
  createRecordPerson(@UploadedFiles() files, @Body() dto: CreatePersonDto){
    const { photo } = files;
    return this.personService.addRecordPerson(dto, photo[0]);
  }
  @Put(':id')
  updatePersonInformation(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto){
    return this.personService.updateRecordPerson(id, updatePersonDto);
  }
}
