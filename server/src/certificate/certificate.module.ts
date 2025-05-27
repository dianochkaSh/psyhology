import { Module } from '@nestjs/common';
import { CertificateController } from './certificate.controller';
import { CertificateService } from './certificate.service';
import { FileService } from '../file/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Certificate, CertificateSchema } from './schemas/certificate.schema';

@Module({
  controllers: [CertificateController],
  providers: [CertificateService, FileService],
  imports: [
    MongooseModule.forFeature([{name: Certificate.name, schema: CertificateSchema}])
  ],
})
export class CertificateModule {}
