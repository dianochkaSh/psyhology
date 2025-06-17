import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { People } from './schemas/people.schema';
import { PeopleService } from './people.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreatePeopleDto } from './dto/create-people-dto';
import { UpdatePeopleDto } from './dto/update-people-dto';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  getPerson(): Promise<People[]> {
    return this.peopleService.getPerson();
  }
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'photo', maxCount: 1 }]))
  createRecordPerson(@UploadedFiles() files, @Body() dto: CreatePeopleDto){
    const { photo } = files;
    return this.peopleService.addRecordPerson(dto, photo[0]);
  }
  @Put(':id')
  updatePersonInformation(@Param('id') id: string, @Body() updatePersonDto: UpdatePeopleDto){
    return this.peopleService.updateRecordPerson(id, updatePersonDto);
  }
  @Delete(':id')
  deletePersonInformation(@Param('id') id: string) {
    return this.peopleService.deletePerson(id);
  }
}
