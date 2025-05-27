import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { Certificate } from './schemas/certificate.schema';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';

@Controller('/certificate')
export class CertificateController {
  constructor(private certificateService: CertificateService) {}

  @Get()
  getAllCertificates():Promise<Certificate[]> {
    return this.certificateService.getAllCertificates();
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  createRecordCertificate(@UploadedFiles() files,@Body() dto:CreateCertificateDto) {
    const { image } = files;
    return this.certificateService.createRecordCertificate(dto, image[0]);
  }
  @Delete(':id')
  deleteRecordCertificate(@Param('id') id: string) {
    return this.certificateService.deleteCertificate(id);
  }
  @Get(':id')
  getOneCertificate(@Param('id') id: ObjectId) {
    return this.certificateService.getOneRecordCertificate(id);
  }
}
