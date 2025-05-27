import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Certificate, CertificateDocument } from './schemas/certificate.schema';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from '../file/file.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';

@Injectable()
export class CertificateService {
  constructor(
    @InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>,
    private fileService: FileService,
  ) {}

  async getAllCertificates(): Promise<Certificate[]> {
    return this.certificateModel.find();
  }

  async createRecordCertificate(dto:CreateCertificateDto, image):Promise<Certificate> {
    const imagePath = this.fileService.createFile(FileType.IMAGE, image);
    const record = this.certificateModel.create({
      ...dto,
      image: imagePath,
    });
    return record;
  }
  deleteCertificate(id: string){
    return this.certificateModel.findByIdAndDelete(id);
  }
  async getOneRecordCertificate(id: ObjectId){
    return this.certificateModel.findById(id);
  }
}
