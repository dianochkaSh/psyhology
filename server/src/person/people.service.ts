import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { People, PeopleDocument } from './schemas/people.schema';
import { Model } from 'mongoose';
import { FileService, FileType } from '../file/file.service';
import { NotFoundException } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people-dto';
import { UpdatePeopleDto } from './dto/update-people-dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectModel(People.name) private peopleModel: Model<PeopleDocument>,
    private fileService: FileService,
  ) {}
  async getPerson(): Promise<People[]> {
    const person = await this.peopleModel.find();
    return person;
  }

  async addRecordPerson(dto: CreatePeopleDto, photo): Promise<People> {
    const photoPath = this.fileService.createFile(FileType.IMAGE, photo);
    const record = await this.peopleModel.create({
      ...dto,
      photo: photoPath,
    });
    return record;
  }
  async updateRecordPerson(id: string, updateUserDto: UpdatePeopleDto) {
    const post = await this.peopleModel.findByIdAndUpdate(id, updateUserDto)
      .setOptions({ overwrite: true, new: true })
      .populate('name')
      .populate('description')
      .populate('education')
      .populate('format_consultation')
      .populate('time_consultation')
      .populate('phone');
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }
  deletePerson(id: string){
    return this.peopleModel.findByIdAndDelete(id);
  }
}
