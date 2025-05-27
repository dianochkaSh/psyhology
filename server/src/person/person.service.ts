import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from './schemas/person.schema';
import { Model, ObjectId } from 'mongoose';
import { CreatePersonDto } from './dto/create-person-dto';
import { FileService, FileType } from '../file/file.service';
import { UpdatePersonDto } from './dto/update-person-dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private PersonModel: Model<PersonDocument>,
    private fileService: FileService,
  ) {}
  async getPerson(): Promise<Person[]> {
    const person = await this.PersonModel.find();
    return person;
  }

  async addRecordPerson(dto: CreatePersonDto, photo): Promise<Person> {
    const photoPath = this.fileService.createFile(FileType.IMAGE, photo);
    const record = await this.PersonModel.create({
      ...dto,
      photo: photoPath,
    });
    return record;
  }
  async updateRecordPerson(id: string, updateUserDto: UpdatePersonDto) {
    const post = await this.PersonModel.findByIdAndUpdate(id, updateUserDto)
      .setOptions({ overwrite: true, new: true })
      .populate('name')
      .populate('description')
      .populate('education');
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }
}
