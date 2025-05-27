import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CertificateDocument = HydratedDocument<Certificate>;
@Schema()
export class Certificate {
  @Prop()
  title: string;

  @Prop()
  image: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
